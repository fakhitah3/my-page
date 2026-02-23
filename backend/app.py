from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import pyarrow.dataset as ds
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = "/content/data"
SILVER_DIR = os.path.join(DATA_DIR, "silver", "item_state_daily")
VOL_DIR    = os.path.join(DATA_DIR, "gold", "volatility_daily")
GARCH_FILE = os.path.join(DATA_DIR, "gold", "garch_fits.parquet")
PRED_PATH_FILE = os.path.join(DATA_DIR, "gold", "predictions", "predictions_path.csv")

# ---------- Load once ----------
silver = ds.dataset(SILVER_DIR, format="parquet", partitioning="hive").to_table().to_pandas()
silver["date"] = pd.to_datetime(silver["date"])

vol = ds.dataset(VOL_DIR, format="parquet", partitioning="hive").to_table().to_pandas()
vol["date"] = pd.to_datetime(vol["date"])

garch = pd.read_parquet(GARCH_FILE)
garch["date"] = pd.to_datetime(garch["date"])

pred_path = pd.read_csv(PRED_PATH_FILE, parse_dates=["base_date","target_date"])

# ---------- Endpoints ----------

@app.get("/metadata")
def metadata():
    return {
        "items": sorted(silver["item_code"].unique().tolist()),
        "states": sorted(silver["state"].unique().tolist())
    }

@app.get("/price-series")
def price_series(item_code: int, state: str):
    df = silver[(silver.item_code == item_code) & (silver.state == state)]
    return df[["date", "avg_price"]].to_dict(orient="records")

@app.get("/volatility")
def volatility(item_code: int, state: str):
    df = vol[(vol.item_code == item_code) & (vol.state == state)]
    return df.to_dict(orient="records")

@app.get("/forecast")
def forecast(item_code: int, state: str, horizon: int):
    hist = garch[(garch.item_code == item_code) & (garch.state == state)]
    hist = hist.sort_values("date").tail(60)[["date", "garch_var"]]

    fpath = pred_path[
        (pred_path.item_code == item_code) &
        (pred_path.state == state) &
        (pred_path.horizon <= horizon)
    ].copy()

    fpath["variance"] = fpath["var_pred_hybrid"].fillna(fpath["var_pred_garch"])
    fpath = fpath.rename(columns={"target_date": "date"})[["date","variance"]]

    return {
        "historical": hist.rename(columns={"garch_var":"variance"}).to_dict("records"),
        "forecast": fpath.to_dict("records")
    }
