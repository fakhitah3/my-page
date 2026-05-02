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

  const isActive = (path: string) => location.pathname === path;

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`font-medium transition-colors ${
        isActive(to)
          ? 'text-brand-violet border-b-2 border-brand-violet'
          : 'text-gray-700 hover:text-brand-coral'
      }`}
    >
      {label}
    </Link>
  );

  const mobileLink = (to: string, label: string) => (
    <Link
      to={to}
      onClick={() => setIsMenuOpen(false)}
      className={`block px-3 py-2 font-medium rounded-lg transition-colors ${
        isActive(to)
          ? 'text-brand-violet bg-brand-violet-50'
          : 'text-gray-700 hover:text-brand-coral hover:bg-brand-coral-50'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-brand-violet hover:text-brand-violet-700 transition-colors">
            Fakhitah Ridzuan
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLink('/', 'Home')}
            {navLink('/research', 'Research')}
            {navLink('/slides', 'Slides')}
            {navLink('/entrepreneurial', 'Entrepreneurial Activity')}
            {navLink('/hall-of-fame', 'Hall of Fame')}
            {navLink('/award', 'Award')}
            {navLink('/contact', 'Contact')}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-coral transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mobileLink('/', 'Home')}
              {mobileLink('/research', 'Research')}
              {mobileLink('/slides', 'Slides')}
              {mobileLink('/entrepreneurial', 'Entrepreneurial Activity')}
              {mobileLink('/hall-of-fame', 'Hall of Fame')}
              {mobileLink('/award', 'Award')}
              {mobileLink('/contact', 'Contact')}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
