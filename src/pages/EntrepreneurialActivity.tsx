import React from 'react';
import { Leaf, Eye, Recycle, Lightbulb } from 'lucide-react';

const EntrepreneurialActivity = () => {
  const projects = [
    {
      id: 1,
      name: 'Ecowatch',
      icon: Eye,
      description: 'Environmental monitoring system that tracks and analyzes ecological changes in real-time using IoT sensors and data analytics.',
      color: 'from-green-600 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-700',
      features: [
        'Real-time environmental data collection',
        'Air quality monitoring',
        'Climate pattern analysis',
        'Automated reporting system'
      ]
    },
    {
      id: 2,
      name: 'Carbonlens',
      icon: Leaf,
      description: 'Carbon footprint tracking and analysis platform helping organizations measure, monitor, and reduce their environmental impact.',
      color: 'from-teal-600 to-cyan-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-700',
      features: [
        'Carbon emissions calculation',
        'Sustainability metrics dashboard',
        'Reduction recommendations',
        'Compliance reporting'
      ]
    },
    {
      id: 3,
      name: 'Wasteless',
      icon: Recycle,
      description: 'Smart waste management solution that optimizes recycling processes and promotes sustainable waste disposal practices.',
      color: 'from-blue-600 to-sky-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-700',
      features: [
        'Waste classification system',
        'Recycling route optimization',
        'Educational resources',
        'Community engagement tools'
      ]
    }
  ];

  const otherInitiatives = [
    {
      title: 'Student Innovation Lab',
      description: 'A collaborative space where students develop and test entrepreneurial ideas with mentorship and resources.'
    },
    {
      title: 'Sustainability Workshops',
      description: 'Regular workshops teaching students about sustainable business practices and green technology.'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with leading companies to provide real-world experience and networking opportunities.'
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entrepreneurial Activity
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fostering innovation and sustainability through student-led projects and initiatives
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`${project.bgColor} rounded-2xl p-8 h-full`}>
                    <div className={`bg-gradient-to-br ${project.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <project.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.name}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className={`${project.iconColor} mr-2 mt-1`}>•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl aspect-video flex items-center justify-center border-2 border-gray-200">
                    <project.icon className={project.iconColor} size={120} strokeWidth={1} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting entrepreneurial growth through various programs and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Entrepreneurial Community
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Interested in participating or learning more about our entrepreneurial initiatives?
            Connect with us to explore opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EntrepreneurialActivity;
