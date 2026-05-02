import React, { useState, useMemo } from 'react';
import { Search, Tag, ExternalLink, FileText, X } from 'lucide-react';
import { slides } from '../data/slidesData';

const Slides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');

  const allTopics = useMemo(() => {
    const topics = slides.flatMap(slide => slide.topics);
    return ['All', ...Array.from(new Set(topics))];
  }, []);

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
      case 'google-slides': return '📊';
      case 'pdf': return '📄';
      case 'powerpoint': return '📋';
      default: return '📄';
    }
  };

  const subjectCards = [
    {
      topic: 'Computer Evolution',
      label: 'Computer Evolution',
      desc: 'History and development of computing systems',
      gradient: 'linear-gradient(135deg, #FF8DA1, #FFC2BA)',
    },
    {
      topic: 'Object Oriented Programming',
      label: 'Object Oriented Programming',
      desc: 'OOP concepts, design patterns, and best practices',
      gradient: 'linear-gradient(135deg, #FF9CE9, #FFC2BA)',
    },
    {
      topic: 'Data Science',
      label: 'Data Science',
      desc: 'Analytics, machine learning, and statistics',
      gradient: 'linear-gradient(135deg, #AD56C4, #FF9CE9)',
    },
    {
      topic: 'Innovation',
      label: 'Innovation',
      desc: 'MakeCode Arcade, MIT App Inventor, creative coding',
      gradient: 'linear-gradient(135deg, #FFC2BA, #FF8DA1)',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Presentations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through my collection of research presentations, conference talks, and educational materials
            covering various topics in data science, machine learning, and application development.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Subject</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjectCards.map(card => (
              <div
                key={card.topic}
                onClick={() => setSelectedTopic(card.topic)}
                className="p-6 rounded-xl text-white cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ background: card.gradient }}
              >
                <h3 className="text-xl font-bold mb-2">{card.label}</h3>
                <p className="text-white/80 text-sm mb-3">{card.desc}</p>
                <div className="text-xs text-white/70">
                  {slides.filter(slide => slide.topics.includes(card.topic)).length} presentations
                </div>
              </div>
            ))}
          </div>

          {selectedTopic !== 'All' && (
            <div className="text-center mt-6">
              <button
                onClick={() => setSelectedTopic('All')}
                className="inline-flex items-center text-white px-6 py-2 rounded-lg transition-opacity font-medium hover:opacity-90"
                style={{ background: '#8b3ea3' }}
              >
                <X size={16} className="mr-2" />
                Clear Filter – Show All Subjects
              </button>
            </div>
          )}
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12" style={{ border: '1px solid #ffd6f8' }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search presentations, topics, or keywords..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none transition"
                onFocus={e => (e.target.style.borderColor = '#AD56C4')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedTopic}
                onChange={e => setSelectedTopic(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg bg-white min-w-[200px] focus:outline-none transition"
                onFocus={e => (e.target.style.borderColor = '#AD56C4')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSlides.map(slide => (
            <div key={slide.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-6 text-white" style={{ background: 'linear-gradient(135deg, #FF8DA1, #AD56C4)' }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">{getTypeIcon(slide.type)}</div>
                  <a href={slide.link} className="text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">{slide.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{slide.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {slide.topics.map(topic => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors"
                      style={{ background: '#f7eefb', color: '#AD56C4' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8ccf3'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f7eefb'; }}
                      onClick={() => setSelectedTopic(topic)}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full text-white py-3 px-4 rounded-lg transition-opacity font-semibold hover:opacity-90"
                  style={{ background: '#AD56C4' }}
                >
                  <FileText size={20} className="mr-2" />
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
            <p className="text-gray-500">Try adjusting your search terms or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slides;
