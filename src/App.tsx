import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import Slides from './pages/Slides.tsx';
import Project from './pages/Project.tsx';
import Award from './pages/Award.tsx';
import Contact from './pages/Contact.tsx';
import Research from './pages/Research.tsx';

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
            <Route path="/entrepreneurial" element={<Project />} />
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
