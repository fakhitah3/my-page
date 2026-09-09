import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className="font-medium transition-colors text-sm"
      style={{ color: isActive(to) ? '#000080' : '#6D8196', borderBottom: isActive(to) ? '2px solid #000080' : 'none', paddingBottom: isActive(to) ? '2px' : '0' }}
    >
      {label}
    </Link>
  );

  const mobileLink = (to: string, label: string) => (
    <Link
      to={to}
      onClick={() => setIsMenuOpen(false)}
      className="block px-3 py-2 font-medium rounded-lg transition-colors text-sm"
      style={isActive(to)
        ? { color: '#000080', background: '#ADD8E640' }
        : { color: '#6D8196' }
      }
    >
      {label}
    </Link>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: isScrolled ? 'white' : 'rgba(255,250,250,0.95)', backdropFilter: 'blur(8px)', boxShadow: isScrolled ? '0 1px 12px rgba(0,0,128,0.08)' : 'none' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold transition-opacity hover:opacity-80" style={{ color: '#000080' }}>
            Fakhitah Ridzuan
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLink('/', 'Home')}
            {navLink('/research', 'Research')}
            {navLink('/slides', 'Slides')}
            {navLink('/entrepreneurial', 'Entrepreneurial Activity')}
            {navLink('/award', 'Award')}
            {navLink('/contact', 'Contact')}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: '#6D8196' }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: '#ADD8E6' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mobileLink('/', 'Home')}
              {mobileLink('/research', 'Research')}
              {mobileLink('/slides', 'Slides')}
              {mobileLink('/entrepreneurial', 'Projects')}
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
