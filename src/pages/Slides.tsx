import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, FileText, X, BookOpen } from 'lucide-react';
import { slides } from '../data/slidesData';
import { useSearchParams } from 'react-router-dom';

const teachingSubjects = [
  { code: '01', title: 'Programming Fundamentals',       topic: 'Programming Fundamentals' },
  { code: '02', title: 'Data Structure',                 topic: 'Data Structure' },
  { code: '03', title: 'Application Development',        topic: 'Application Development' },
  { code: '04', title: 'Fundamentals of Programming',    topic: 'Fundamentals of Programming' },
  { code: '05', title: 'Object-Oriented Programming',    topic: 'Object Oriented Programming' },
  { code: '06', title: 'Introduction to Data Science',   topic: 'Data Science' },
  { code: '07', title: 'Data Mining and Applications',   topic: 'Data Science' },
  { code: '08', title: 'Industrial Revolution 4.0',      topic: 'Innovation' },
  { code: '09', title: 'Advanced Topic in Data Science', topic: 'Data Science' },
  { code: '10', title: 'Evolutionary Computing',         topic: 'Computer Evolution' },
  { code: '11', title: 'Scientific Visualisation',       topic: 'Data Science' },
];

const Slides = () => {
  const [searchParams] = useSearchParams();
  const initialTopic = searchParams.get('topic') || 'All';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);

  const filteredSlides = useMemo(() => {
    return slides.filter(slide => {
      const matchesSearch =
        slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        slide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        slide.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTopic = selectedTopic === 'All' || slide.topics.includes(selectedTopic);
      return matchesSearch && matchesTopic;
    });
  }, [searchTerm, selectedTopic]);

  const selectedSubject = selectedTopic !== 'All'
    ? teachingSubjects.find(s => s.topic === selectedTopic)
    : null;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff0f3 0%, #fff0fc 50%, #f7eefb 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF8DA1' }}>Presentations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Academic Slides</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Browse presentations and teaching materials organised by subject. Select a subject below to filter slides for that course.
          </p>
        </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Course</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedTopic('All')}
              className="rounded-xl p-4 text-left transition-all shadow-sm hover:shadow-md"
              style={selectedTopic === 'All'
                ? { background: '#AD56C4', border: '1px solid #AD56C4', color: 'white' }
                : { background: 'white', border: '1px solid #e8ccf3', color: '#374151' }
              }
            >
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded mb-2 inline-block"
                style={selectedTopic === 'All'
                  ? { background: 'rgba(255,255,255,0.2)', color: 'white' }
                  : { background: '#e8ccf3', color: '#AD56C4' }
                }
              >ALL</span>
              <p className="font-semibold mt-2">All Subjects</p>
              <p className="text-xs mt-1 opacity-70">{slides.length} slides</p>
            </button>

            {teachingSubjects.map(subject => {
              const count = slides.filter(s => s.topics.includes(subject.topic)).length;
              const isActive = selectedTopic === subject.topic;
              return (
                <button
                  key={subject.code}
                  onClick={() => setSelectedTopic(subject.topic)}
                  className="rounded-xl p-4 text-left transition-all shadow-sm hover:shadow-md"
                  style={isActive
                    ? { background: '#AD56C4', border: '1px solid #AD56C4', color: 'white' }
                    : { background: 'white', border: '1px solid #e8ccf3', color: '#374151' }
                  }
                >
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded mb-2 inline-block"
                    style={isActive
                      ? { background: 'rgba(255,255,255,0.2)', color: 'white' }
                      : { background: '#e8ccf3', color: '#AD56C4' }
                    }
                  >{subject.code}</span>
                  <p className="font-semibold mt-2 leading-snug">{subject.title}</p>
                  <p className="text-xs mt-1 opacity-70">{count} slide{count !== 1 ? 's' : ''}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slides List */}
      <section className="py-16" style={{ background: '#fff0fc' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF8DA1' }}>
                  {selectedTopic === 'All' ? 'All Presentations' : selectedSubject?.title || selectedTopic}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {selectedTopic === 'All' ? 'All Slides' : 'Course Slides'}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {selectedTopic !== 'All' && (
                <button
                  onClick={() => setSelectedTopic('All')}
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-opacity hover:opacity-80"
                  style={{ background: '#e8ccf3', color: '#AD56C4' }}
                >
                  <X size={14} />
                  Clear filter
                </button>
              )}
              <span className="text-sm text-gray-500">{filteredSlides.length} slide{filteredSlides.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl p-4 mb-8 shadow-sm" style={{ border: '1px solid #ffd6f8' }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search slides by title or keyword..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none transition"
                onFocus={e => (e.target.style.borderColor = '#AD56C4')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
          </div>

          {filteredSlides.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl" style={{ border: '1px solid #ffd6f8' }}>
              <BookOpen className="mx-auto mb-4" size={48} style={{ color: '#e8ccf3' }} />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No slides found</h3>
              <p className="text-gray-500">
                {selectedTopic !== 'All'
                  ? 'No slides are available for this subject yet.'
                  : 'Try adjusting your search terms.'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSlides.map((slide, i) => (
                <div
                  key={slide.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                  style={{ border: '1px solid #ffd6f8' }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center"
                      style={{ background: '#e8ccf3', color: '#AD56C4' }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg leading-snug">{slide.title}</h3>
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-lg whitespace-nowrap transition-opacity hover:opacity-80 flex-shrink-0"
                          style={{ background: '#AD56C4', color: 'white' }}
                        >
                          <FileText size={14} />
                          View Slide
                          <ExternalLink size={12} />
                        </a>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{slide.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {slide.topics.map(topic => (
                          <span
                            key={topic}
                            className="text-xs font-medium px-2.5 py-0.5 rounded-full cursor-pointer transition-colors"
                            style={{ background: '#f7eefb', color: '#AD56C4' }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#e8ccf3')}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#f7eefb')}
                            onClick={() => setSelectedTopic(topic)}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Slides;
