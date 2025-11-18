import React, { useState, useMemo } from 'react';
import { Search, Tag, ExternalLink, FileText, X } from 'lucide-react';
import { slides, Slide } from '../data/slidesData';

const Slides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');

  // Get all unique topics
  const allTopics = useMemo(() => {
    const topics = slides.flatMap(slide => slide.topics);
    return ['All', ...Array.from(new Set(topics))];
  }, []);

  // Filter slides based on search term and selected topic
  const filteredSlides = useMemo(() => {
    return slides.filter(slide => {
      const matchesSearch = slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        slide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        slide.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTopic = selectedTopic === 'All' || slide.topics.includes(selectedTopic);

      return matchesSearch && matchesTopic;
    });
  }, [searchTerm, selectedTopic]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'google-slides':
        return '📊';
      case 'pdf':
        return '📄';
      case 'powerpoint':
        return '📋';
      default:
        return '📄';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Presentations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through my collection of research presentations, conference talks, and educational materials 
            covering various topics in data science, machine learning.
          </p>
        </div>

        {/* Subject/Module Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Subject</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Computer Evolution Module */}
            <div 
              onClick={() => setSelectedTopic('Computer Evolution')}
              className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl text-white cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="text-xl font-bold mb-2">Computer Evolution</h3>
              <p className="text-blue-100 text-sm mb-3">History and development of computing systems</p>
              <div className="text-xs text-blue-200">
                {slides.filter(slide => slide.topics.includes('Computer Evolution')).length} presentations
              </div>
            </div>

            {/* Object Oriented Programming Module */}
            <div 
              onClick={() => setSelectedTopic('Object Oriented Programming')}
              className="bg-gradient-to-br from-teal-500 to-teal-700 p-6 rounded-xl text-white cursor-pointer hover:from-teal-600 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold mb-2">Object Oriented Programming</h3>
              <p className="text-teal-100 text-sm mb-3">OOP concepts, design patterns, and best practices</p>
              <div className="text-xs text-teal-200">
                {slides.filter(slide => slide.topics.includes('Object Oriented Programming')).length} presentations
              </div>
            </div>

            {/* Data Science Module */}
            <div 
              onClick={() => setSelectedTopic('Data Science')}
              className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl text-white cursor-pointer hover:from-purple-600 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2">Data Science</h3>
              <p className="text-purple-100 text-sm mb-3">Analytics, machine learning, and statistics</p>
              <div className="text-xs text-purple-200">
                {slides.filter(slide => slide.topics.includes('Data Science')).length} presentations
              </div>
            </div>

            {/* Innovation Module */}
            <div 
              onClick={() => setSelectedTopic('Innovation')}
              className="bg-gradient-to-br from-orange-500 to-orange-700 p-6 rounded-xl text-white cursor-pointer hover:from-orange-600 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-orange-100 text-sm mb-3">MakeCode Arcade, MIT App Inventor, creative coding</p>
              <div className="text-xs text-orange-200">
                {slides.filter(slide => slide.topics.includes('Innovation')).length} presentations
              </div>
            </div>
          </div>

          {/* Clear Filter Button */}
          {selectedTopic !== 'All' && (
            <div className="text-center mt-6">
              <button
                onClick={() => setSelectedTopic('All')}
                className="inline-flex items-center bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                <X size={16} className="mr-2" />
                Clear Filter - Show All Subjects
              </button>
            </div>
          )}
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search presentations, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Topic Filter */}
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white min-w-[200px]"
              >
                {allTopics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredSlides.length} of {slides.length} presentations
          </div>
        </div>

        {/* Slides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSlides.map((slide) => (
            <div key={slide.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">{getTypeIcon(slide.type)}</div>
                  <a
                    href={slide.link}
                    className="text-white/80 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-100 transition-colors">
                  {slide.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {slide.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {slide.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                      onClick={() => setSelectedTopic(topic)}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold group"
                >
                  <FileText size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                  View Presentation
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredSlides.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No presentations found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slides;