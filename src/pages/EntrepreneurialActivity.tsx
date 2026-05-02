import React from 'react';
import { Leaf, Eye, Recycle, Lightbulb } from 'lucide-react';

const EntrepreneurialActivity = () => {
  const projects = [
    {
      id: 1,
      name: 'Ecowatch',
      icon: Eye,
      description: 'Environmental monitoring system that tracks and analyzes ecological changes in real-time using IoT sensors and data analytics.',
      gradient: 'linear-gradient(135deg, #FF8DA1, #FFC2BA)',
      bgColor: '#fff0f3',
      iconColor: '#FF8DA1',
      features: [
        'Real-time environmental data collection',
        'Air quality monitoring',
        'Climate pattern analysis',
        'Automated reporting system',
      ],
    },
    {
      id: 2,
      name: 'Carbonlens',
      icon: Leaf,
      description: 'Carbon footprint tracking and analysis platform helping organizations measure, monitor, and reduce their environmental impact.',
      gradient: 'linear-gradient(135deg, #FF9CE9, #FFC2BA)',
      bgColor: '#fff0fc',
      iconColor: '#FF9CE9',
      features: [
        'Carbon emissions calculation',
        'Sustainability metrics dashboard',
        'Reduction recommendations',
        'Compliance reporting',
      ],
    },
    {
      id: 3,
      name: 'Wasteless',
      icon: Recycle,
      description: 'Smart waste management solution that optimizes recycling processes and promotes sustainable waste disposal practices.',
      gradient: 'linear-gradient(135deg, #AD56C4, #FF9CE9)',
      bgColor: '#f7eefb',
      iconColor: '#AD56C4',
      features: [
        'Waste classification system',
        'Recycling route optimization',
        'Educational resources',
        'Community engagement tools',
      ],
    },
  ];

  const otherInitiatives = [
    {
      title: 'Student Innovation Lab',
      description: 'A collaborative space where students develop and test entrepreneurial ideas with mentorship and resources.',
    },
    {
      title: 'Sustainability Workshops',
      description: 'Regular workshops teaching students about sustainable business practices and green technology.',
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with leading companies to provide real-world experience and networking opportunities.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff0f3 0%, #fff0fc 50%, #f7eefb 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF8DA1' }}>Innovation</span>
              <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entrepreneurial Activity</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fostering innovation and sustainability through student-led projects and initiatives
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-2xl p-8 h-full" style={{ background: project.bgColor }}>
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg" style={{ background: project.gradient }}>
                      <project.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.name}</h3>
                    <p className="text-gray-700 text-lg mb-6">{project.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 mt-1" style={{ color: project.iconColor }}>•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl aspect-video flex items-center justify-center" style={{ background: project.bgColor, border: `2px solid ${project.iconColor}33` }}>
                    <project.icon style={{ color: project.iconColor }} size={120} strokeWidth={1} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#fff0fc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #FF8DA1, #AD56C4)' }}>
              <Lightbulb className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting entrepreneurial growth through various programs and partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow" style={{ border: '1px solid #ffd6f8' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #FF8DA1, #AD56C4)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Entrepreneurial Community</h2>
          <p className="text-xl text-white/90">
            Interested in participating or learning more about our entrepreneurial initiatives?
            Connect with us to explore opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EntrepreneurialActivity;
