import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Slides from './pages/Slides';
import EntrepreneurialActivity from './pages/EntrepreneurialActivity';
import Award from './pages/Award';
import Contact from './pages/Contact';
import Research from './pages/Research';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/slides" element={<Slides />} />
            <Route path="/entrepreneurial" element={<EntrepreneurialActivity />} />
            <Route path="/award" element={<Award />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
