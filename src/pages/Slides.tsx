import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, FileText, X, BookOpen } from 'lucide-react';
import { slides } from '../data/slidesData';
import { useSearchParams } from 'react-router-dom';

const teachingSubjects = [
  { code: '01', title: 'Programming Fundamentals',       topic: 'Programming Fundamentals' },
  { code: '02', title: 'Data Structure',                 topic: 'Data Structure' },
  { code: '03', title: 'Application Development',        topic: 'Application Development' },
  { code: '04', title: 'Object-Oriented Programming',    topic: 'Object Oriented Programming' },
  { code: '05', title: 'Introduction to Data Science',   topic: 'Data Science' },
  { code: '06', title: 'Data Mining and Applications',   topic: 'Data Science' },
  { code: '07', title: 'Industrial Revolution 4.0',      topic: 'Innovation' },
  { code: '08', title: 'Advanced Topic in Data Science', topic: 'Data Science' },
  { code: '09', title: 'Evolutionary Computing',         topic: 'Computer Evolution' },
  { code: '10', title: 'Scientific Visualisation',       topic: 'Data Science' },
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #FFFAFA 0%, #ADD8E620 60%, #6D819610 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Presentations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Academic Slides</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Browse presentations and teaching materials organised by subject. Select a subject below to filter slides for that course.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { value: slides.length, label: 'Total Slides' },
              { value: new Set(slides.flatMap(s => s.topics)).size, label: 'Topics Covered' },
              { value: teachingSubjects.length, label: 'Subjects' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm text-center" style={{ border: '1px solid #ADD8E6' }}>
                <p className="text-2xl font-bold" style={{ color: '#000080' }}>{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Filter by Subject</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Course</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <button
              onClick={() => setSelectedTopic('All')}
              className="rounded-xl p-4 text-left transition-all shadow-sm hover:shadow-md"
              style={selectedTopic === 'All'
                ? { background: '#000080', border: '1px solid #000080', color: 'white' }
                : { background: 'white', border: '1px solid #ADD8E6', color: '#374151' }
              }
            >
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded mb-2 inline-block"
                style={selectedTopic === 'All'
                  ? { background: 'rgba(173,216,230,0.3)', color: 'white' }
                  : { background: '#ADD8E640', color: '#000080' }
                }
              >ALL</span>
              <p className="font-semibold mt-2">All Subjects</p>
              <p className="text-xs mt-1 opacity-60">{slides.length} slides</p>
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
                    ? { background: '#000080', border: '1px solid #000080', color: 'white' }
                    : { background: 'white', border: '1px solid #ADD8E6', color: '#374151' }
                  }
                >
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded mb-2 inline-block"
                    style={isActive
                      ? { background: 'rgba(173,216,230,0.3)', color: 'white' }
                      : { background: '#ADD8E640', color: '#000080' }
                    }
                  >{subject.code}</span>
                  <p className="font-semibold mt-2 leading-snug">{subject.title}</p>
                  <p className="text-xs mt-1 opacity-60">{count} slide{count !== 1 ? 's' : ''}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slides Grid */}
      <section className="py-16" style={{ background: '#FFFAFA' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>
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
                  style={{ background: '#ADD8E640', color: '#000080' }}
                >
                  <X size={14} />
                  Clear filter
                </button>
              )}
              <span className="text-sm text-gray-500">{filteredSlides.length} slide{filteredSlides.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-xl p-4 mb-8 shadow-sm" style={{ border: '1px solid #ADD8E6' }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search slides by title or keyword..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none transition"
                onFocus={e => (e.target.style.borderColor = '#000080')}
                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>
          </div>

          {filteredSlides.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl" style={{ border: '1px solid #ADD8E6' }}>
              <BookOpen className="mx-auto mb-4" size={48} style={{ color: '#ADD8E6' }} />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No slides found</h3>
              <p className="text-gray-500">
                {selectedTopic !== 'All' ? 'No slides are available for this subject yet.' : 'Try adjusting your search terms.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSlides.map((slide, i) => (
                <div
                  key={slide.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col"
                  style={{ border: '1px solid #ADD8E6' }}
                >
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center"
                        style={{ background: '#ADD8E640', color: '#000080' }}
                      >
                        {i + 1}
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {slide.topics.map(topic => (
                          <span
                            key={topic}
                            className="text-xs font-medium px-2 py-0.5 rounded-full cursor-pointer transition-colors"
                            style={{ background: '#ADD8E620', color: '#6D8196' }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#ADD8E640')}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#ADD8E620')}
                            onClick={() => setSelectedTopic(topic)}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{slide.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{slide.description}</p>
                  </div>
                  <div className="px-5 pb-5">
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-lg transition-opacity hover:opacity-80 text-white"
                      style={{ background: '#000080' }}
                    >
                      <FileText size={14} />
                      View Slide
                      <ExternalLink size={12} />
                    </a>
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
