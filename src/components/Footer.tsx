import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12" style={{ background: '#000080' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ADD8E6' }}>Quick Links</h4>
            <div className="space-y-2">
              {[
                ['/', 'Home'],
                ['/research', 'Research'],
                ['/slides', 'Presentations'],
                ['/award', 'Award'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="block text-sm transition-opacity hover:opacity-70" style={{ color: '#ADD8E6' }}>{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ADD8E6' }}>Academic Resources</h4>
            <div className="space-y-2">
              {[
                ['https://scholar.google.com/citations?user=aKWKbaYAAAAJ&hl=en', 'Google Scholar'],
                ['https://expert.umk.edu.my/profile/01983A/', 'Curriculum Vitae'],
              ].map(([href, label]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm transition-opacity hover:opacity-70" style={{ color: '#ADD8E6' }}>
                  {label} <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#ADD8E6' }}>Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#ADD8E6' }} />
                <div>
                  <a href="mailto:fakhitah.ridzuan@gmail.com" className="text-sm block transition-opacity hover:opacity-70" style={{ color: '#ADD8E6' }}>fakhitah.ridzuan@gmail.com</a>
                  <a href="mailto:fakhitah.r@umk.edu.my" className="text-sm block transition-opacity hover:opacity-70" style={{ color: '#ADD8E6' }}>fakhitah.r@umk.edu.my</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#ADD8E6' }} />
                <p className="text-sm leading-relaxed" style={{ color: '#ADD8E6' }}>
                  Faculty of Data Science and Computing<br />
                  Universiti Malaysia Kelantan<br />
                  Kota Bharu, Kelantan
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#ADD8E6' }} />
                <p className="text-sm" style={{ color: '#ADD8E6' }}>Sun – Thu &nbsp;|&nbsp; 9:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t mt-10 pt-6" style={{ borderColor: '#ADD8E640' }}>
          <p className="text-sm" style={{ color: '#6D8196' }}>
            © {currentYear} Fakhitah Ridzuan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
