import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Text Content */}
  <div className="text-center lg:text-left">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      Welcome to My
      <span className="text-blue-700 block">Academic Hub</span>
    </h1>

    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Fakhitah Ridzuan is an educator and researcher whose work spans data science, emerging technologies, 
      and the design of application-based solutions.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Link 
        to="/slides"
        className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
      >
        Explore My Slides
        <ChevronRight size={20} className="ml-2" />
      </Link>
      
      <Link 
        to="/contact"
        className="inline-flex items-center border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors font-semibold text-lg"
      >
        Get in Touch
      </Link>
    </div>
  </div>

  {/* Profile Image on the Right */}
  <div className="flex justify-center lg:justify-end">
    <div className="relative">
      <img 
        src="/Untitled design (4).png"
        alt="Fakhitah Ridzuan"
        className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
      />
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Brief Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Fakhitah Ridzuan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate researcher and educator dedicated to advancing knowledge in data science, 
              machine learning, and renewable energy systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-blue-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Focus</h3>
              <p className="text-gray-600">
               AI in Education, Data Analytics, AI and IoT for Sustainability
              </p>
            </div>

            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teaching</h3>
              <p className="text-gray-600">
                Programming Fundamentals, Application Development, Data Science, Computer Evolution
              </p>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Recognition</h3>
              <p className="text-gray-600">
                Royal Scholarship Award Recepient 2017
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/about"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              Learn More About Me
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Slides Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Presentations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my recent academic presentations and research talks
            </p>
          </div>

          <div className="text-center">
            <Link 
              to="/slides"
              className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
            >
              View All Presentations
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;