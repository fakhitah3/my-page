import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Fakhitah Ridzuan</h3>
            <p className="text-gray-300 leading-relaxed">
              Advancing knowledge through research, education, and collaboration in data science, 
              machine learning, and sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/slides" className="block text-gray-300 hover:text-white transition-colors">
                Presentations
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Me
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Academic Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Academic Resources</h4>
            <div className="space-y-2">
              <a href="https://scholar.google.com/citations?user=aKWKbaYAAAAJ&hl=en" className="flex items-center text-gray-300 hover:text-white transition-colors">
                Google Scholar <ExternalLink size={16} className="ml-1" />
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                ORCID Profile <ExternalLink size={16} className="ml-1" />
              </a>
              <a href="https://expert.umk.edu.my/profile/01983A/" className="flex items-center text-gray-300 hover:text-white transition-colors">
                Curriculum Vitae <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Fakhitah Ridzuan. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 mx-1 animate-pulse" />
            <span>for advancing scientific knowledge</span>
          </div>
        </div>

        {/* University Affiliation */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Affiliated with the Faculty of Data Science and Computing, Universiti Malaysia Kelantan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;