import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/slides" className="block text-gray-300 hover:text-white transition-colors">Presentations</Link>
<Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Academic Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Academic Resources</h4>
            <div className="space-y-2">
              <a href="https://scholar.google.com/citations?user=aKWKbaYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                Google Scholar <ExternalLink size={14} className="ml-1" />
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                ORCID Profile <ExternalLink size={14} className="ml-1" />
              </a>
              <a href="https://expert.umk.edu.my/profile/01983A/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                Curriculum Vitae <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:fakhitah.ridzuan@gmail.com" className="block text-gray-300 hover:text-white transition-colors text-sm">fakhitah.ridzuan@gmail.com</a>
                  <a href="mailto:fakhitah.r@umk.edu.my" className="block text-gray-300 hover:text-white transition-colors text-sm">fakhitah.r@umk.edu.my</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Faculty of Data Science and Computing<br />
                    Universiti Malaysia Kelantan<br />
                    Kota Bharu, Kelantan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Office Hours</p>
                  <p className="text-gray-300 text-sm">Sunday – Thursday</p>
                  <p className="text-gray-300 text-sm">9:00 AM – 4:00 PM</p>
                  <p className="text-gray-400 text-xs mt-0.5">By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm">
            © {currentYear} Fakhitah Ridzuan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
