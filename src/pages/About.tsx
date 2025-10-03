import React from 'react';
import { GraduationCap, Award, BookOpen, Users, Download, ExternalLink, MapPin, Calendar, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Senior Lecturer and researcher dedicated to advancing knowledge in data science, 
            computer science education, and innovative teaching methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Profile Image and Quick Info */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <img 
                  src="/Untitled design (4).png"
                  alt="Fakhitah Ridzuan"
                  className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white p-3 rounded-full shadow-lg">
                  <div className="text-xl">🎓</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Senior Lecturer at Universiti Malaysia Kelantan</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-teal-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Ph.D. in Computer Science</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Faculty of Data Science and Computing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Specializing in Data Science & Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Philosophy */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Philosophy</h3>
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="mb-4">
                I believe in the transformative power of education and technology to solve real-world problems. 
                My work focuses on making data science accessible and engaging through innovative teaching 
                methodologies and practical applications.
              </p>
              <p className="mb-4">
                As an educator, I'm passionate about developing creative approaches to computer science education, 
                utilizing tools like MakeCode Arcade and MIT App Inventor to make programming concepts more 
                accessible to students of all backgrounds.
              </p>
              <p>
                My research philosophy centers on bridging the gap between theoretical knowledge and practical 
                implementation, ensuring that students not only understand concepts but can apply them effectively 
                in their future careers.
              </p>
            </div>
          </div>
        </div>

        {/* Education and Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Education */}
          <div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                 <div className="text-3xl mb-3">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <p className="font-bold text-gray-900 text-lg">Doctor of Philosophy - Management Information System</p>
                  <p className="text-blue-600 font-semibold">Universiti Sains Malaysia</p>
                  <p className="text-gray-600">2017 - 2021</p>
                </div>
                
                <div className="border-l-4 border-indigo-600 pl-6">
                  <p className="font-bold text-gray-900 text-lg">Bachelor of Computer Science (Software Engineering)</p>
                  <p className="text-indigo-600 font-semibold">Universiti Teknologi Malaysia</p>
                  <p className="text-gray-600">20012 - 2016</p>
                  <p className="text-sm text-gray-500 mt-2">
                    First Class Honours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Position and Experience */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                 <div className="text-3xl mb-3">🎖</div>
                <h3 className="text-2xl font-bold text-gray-900">Current Position</h3>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl mb-2">Senior Lecturer</p>
                <p className="text-blue-700 font-semibold text-lg">Faculty of Data Science and Computing</p>
                <p className="text-blue-600">Universiti Malaysia Kelantan</p>
                <p className="text-gray-600 mt-2">2022 - Present</p>
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                 <div className="text-3xl mb-3">👥</div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-bold text-gray-900">Lecturer</p>
                  <p className="text-teal-600 font-semibold">INTI International College Penang</p>
                  <p className="text-gray-600 text-sm">2022 - 2022</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4">
                  <p className="font-bold text-gray-900">Research Assistant</p>
                  <p className="text-gray-600 font-semibold">Universiti Sains Malaysia</p>
                  <p className="text-gray-600 text-sm">2021 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests and Expertise */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-2xl font-bold text-gray-900">Research Interests & Expertise</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Core Areas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    Data Science & Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    Computer Science Education
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    Object-Oriented Programming
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                    Computer Evolution & History
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Innovation & Technology</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Educational Technology Innovation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    MakeCode Arcade Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    MIT App Inventor Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Creative Coding & Game Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Mail className="text-blue-600 mr-3" size={24} />
                <h4 className="font-bold text-gray-900">Email</h4>
              </div>
              <p className="text-gray-600">fakhitah.ridzuan@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <MapPin className="text-teal-600 mr-3" size={24} />
                <h4 className="font-bold text-gray-900">Location</h4>
              </div>
              <p className="text-gray-600">
                Faculty of Data Science and Computing<br />
                Universiti Malaysia Kelantan<br />
                Kota Bharu, Kelantan
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Calendar className="text-indigo-600 mr-3" size={24} />
                <h4 className="font-bold text-gray-900">Office Hours</h4>
              </div>
              <p className="text-gray-600">
                Sunday - Thursday<br />
                9:00 AM - 4:00 PM<br />
                By appointment
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Teaching Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl text-white text-center">
              <div className="text-3xl mb-3">🖥️</div>
              <h4 className="text-lg font-bold mb-2">Computer Evolution</h4>
              <p className="text-blue-100 text-sm">History and development of computing systems</p>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-6 rounded-xl text-white text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="text-lg font-bold mb-2">Object Oriented Programming</h4>
              <p className="text-teal-100 text-sm">OOP concepts, design patterns, and best practices</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl text-white text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-bold mb-2">Data Science</h4>
              <p className="text-purple-100 text-sm">Analytics, machine learning, and statistics</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-6 rounded-xl text-white text-center">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-lg font-bold mb-2">Innovation</h4>
              <p className="text-orange-100 text-sm">MakeCode Arcade, MIT App Inventor, creative coding</p>
            </div>
          </div>
        </div>

        {/* Academic Resources */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Academic Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://expert.umk.edu.my/profile/01983A/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-700 text-white px-6 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              <Download size={20} className="mr-2" />
              UMK Expert Profile
            </a>
            <a
              href="https://scholar.google.com/citations?user=aKWKbaYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white border-2 border-blue-700 text-blue-700 px-6 py-4 rounded-lg hover:bg-blue-700 hover:text-white transition-colors font-semibold"
            >
              <ExternalLink size={20} className="mr-2" />
              Google Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/fakhitahridzuan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white border-2 border-teal-600 text-teal-600 px-6 py-4 rounded-lg hover:bg-teal-600 hover:text-white transition-colors font-semibold"
            >
              <ExternalLink size={20} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/fakhitah3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white border-2 border-gray-600 text-gray-600 px-6 py-4 rounded-lg hover:bg-gray-600 hover:text-white transition-colors font-semibold"
            >
              <ExternalLink size={20} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;