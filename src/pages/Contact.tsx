import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen" style={{ background: '#fff0fc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF8DA1' }}>Reach Out</span>
            <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I welcome collaboration opportunities, speaking engagements, and discussions about research.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #ffd6f8' }}>
                <div className="p-3 rounded-full mr-4" style={{ background: '#fff0f3' }}>
                  <Mail style={{ color: '#FF8DA1' }} size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">fakhitah.ridzuan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #ffd6f8' }}>
                <div className="p-3 rounded-full mr-4" style={{ background: '#fff0fc' }}>
                  <Phone style={{ color: '#FF9CE9' }} size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office Phone</p>
                  <p className="text-gray-600">+6010-4045972</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #ffd6f8' }}>
                <div className="p-3 rounded-full mr-4 mt-1" style={{ background: '#f7eefb' }}>
                  <MapPin style={{ color: '#AD56C4' }} size={24} />
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
                  style={{ background: '#AD56C4' }}
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

            <div className="mt-6 p-4 rounded-lg" style={{ background: '#fff0f3', border: '1px solid #ffd6dd' }}>
              <p className="text-sm" style={{ color: '#8b3ea3' }}>
                <strong>Response Time:</strong> I typically respond to emails within 24–48 hours during business days.
                For urgent matters, please call my office phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
