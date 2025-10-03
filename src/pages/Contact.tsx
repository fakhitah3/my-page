import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I welcome collaboration opportunities, speaking engagements, and discussions about research. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="text-blue-700" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">fakhitah.ridzuan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office Phone</p>
                  <p className="text-gray-600">+6010-4045972</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 mt-1">
                  <MapPin className="text-indigo-600" size={24} />
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

            {/* Professional Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Networks</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/fakhitahridzuan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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

            {/* Response Time Notice */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Response Time:</strong> I typically respond to emails within 24-48 hours during business days. 
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
