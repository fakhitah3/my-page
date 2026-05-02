import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen" style={{ background: '#FFFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Reach Out</span>
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I welcome collaboration opportunities, speaking engagements, and discussions about research.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
          <div className="space-y-4 mb-12">
            {[
              { icon: Mail,  bg: '#ADD8E620', iconColor: '#000080', label: 'Email',           text: 'fakhitah.ridzuan@gmail.com' },
              { icon: Phone, bg: '#ADD8E620', iconColor: '#6D8196', label: 'Office Phone',     text: '+6010-4045972' },
            ].map(({ icon: Icon, bg, iconColor, label, text }) => (
              <div key={label} className="flex items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #ADD8E6' }}>
                <div className="p-3 rounded-full mr-4" style={{ background: bg }}>
                  <Icon size={22} style={{ color: iconColor }} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{label}</p>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #ADD8E6' }}>
              <div className="p-3 rounded-full mr-4 mt-1" style={{ background: '#6D819615' }}>
                <MapPin size={22} style={{ color: '#6D8196' }} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office Location</p>
                <p className="text-gray-600">
                  Faculty of Data Science and Computing, UMK Kampus Kota<br />
                  Karung Berkunci 36, Pengkalan Chepa<br />
                  16100 Kota Bharu, Kelantan
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Networks</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/fakhitahridzuan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white px-4 py-3 rounded-lg transition-opacity hover:opacity-90"
                style={{ background: '#000080' }}
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/fakhitah3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ background: '#ADD8E620', border: '1px solid #ADD8E6' }}>
            <p className="text-sm" style={{ color: '#000080' }}>
              <strong>Response Time:</strong> I typically respond to emails within 24–48 hours during business days.
              For urgent matters, please call my office phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
