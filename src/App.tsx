import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Slides from './pages/Slides';
import EntrepreneurialActivity from './pages/EntrepreneurialActivity';
import HallOfFame from './pages/HallOfFame';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/slides" element={<Slides />} />
            <Route path="/entrepreneurial" element={<EntrepreneurialActivity />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;