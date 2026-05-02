import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors">
            Fakhitah Ridzuan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/research"
              className={`font-medium transition-colors ${
                isActive('/research')
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Research
            </Link>
            <Link
              to="/slides"
              className={`font-medium transition-colors ${
                isActive('/slides')
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Slides
            </Link>
            <Link
              to="/entrepreneurial"
              className={`font-medium transition-colors ${
                isActive('/entrepreneurial')
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Entrepreneurial Activity
            </Link>
            <Link
              to="/hall-of-fame"
              className={`font-medium transition-colors ${
                isActive('/hall-of-fame')
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Hall of Fame
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about')
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActive('/')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/research"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActive('/research')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Research
              </Link>
              <Link
                to="/slides"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActive('/slides')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Slides
              </Link>
              <Link
                to="/entrepreneurial"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActive('/entrepreneurial')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Entrepreneurial Activity
              </Link>
              <Link
                to="/hall-of-fame"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActive('/hall-of-fame')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Hall of Fame
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;