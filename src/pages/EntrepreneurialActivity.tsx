import React from 'react';
import { Droplets, BarChart3, Leaf, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'EcoWatch',
    tagline: 'Smart Data, Healthier Shrimp',
    icon: Droplets,
    description:
      'EcoWatch is a sustainability-driven startup that helps aquaculture farmers and environmental agencies track, monitor, and improve water quality using an intelligent data-analytics platform. Our EcoBot solution empowers users to make data-driven decisions that accelerate progress toward SDG 6 (Clean Water) and SDG 14 (Life Below Water) goals. By replacing manual sampling with real-time AI insights, we ensure healthier aquatic ecosystems and maximized farming yields.',
    sdgs: ['SDG 6 – Clean Water', 'SDG 14 – Life Below Water'],
    accent: '#000080',
    light: '#ADD8E620',
    border: '#ADD8E6',
  },
  {
    id: 2,
    name: 'Carbonlens',
    tagline: 'Making Sustainability as Easy as Tracking Your Steps',
    icon: BarChart3,
    description:
      'Carbonlens is a web-based platform that provides an intelligent idea of technology and AI to ensure that ESG reporting becomes quicker, more precise, and significant. Compared to the conventional manual system, which is time-consuming and can easily cause errors, Carbonlens offers a single platform to run Scope 1, 2 and 3 emissions with ease.',
    highlights: ['Scope 1, 2 & 3 emissions tracking', 'AI-powered ESG reporting', 'Faster and more accurate than manual systems'],
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 3,
    name: 'Wasteless',
    tagline: 'Trim the Waste, Feed the World',
    icon: Leaf,
    description: null,
    benefits: [
      { title: 'Reducing Food Waste',       desc: 'Helps decrease the amount of food waste ending up in landfills.' },
      { title: 'Economic Savings',           desc: 'Offers significant savings for consumers and revenue recovery for sellers.' },
      { title: 'Supporting Sustainability',  desc: 'Promotes sustainable consumption practices and environmental protection.' },
    ],
    accent: '#000080',
    light: '#ADD8E615',
    border: '#ADD8E6',
  },
];

const EntrepreneurialActivity = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #FFFAFA 0%, #ADD8E620 60%, #6D819610 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Innovation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entrepreneurial Activity</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Building technology ventures at the intersection of sustainability, data science, and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Visual panel */}
              <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className="rounded-2xl p-10 flex flex-col items-center justify-center text-center aspect-square"
                  style={{ background: project.light, border: `1px solid ${project.border}` }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                    style={{ background: project.accent }}
                  >
                    <project.icon size={40} className="text-white" />
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                    style={{ background: `${project.accent}20`, color: project.accent }}
                  >
                    Venture {String(project.id).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm mt-2 leading-snug italic" style={{ color: '#6D8196' }}>"{project.tagline}"</p>
                </div>
              </div>

              {/* Content panel */}
              <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-1 w-8 rounded" style={{ background: '#ADD8E6' }} />
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>
                    {project.tagline}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">{project.name}</h2>

                {project.description && (
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                )}

                {/* SDG badges */}
                {'sdgs' in project && project.sdgs && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.sdgs.map(sdg => (
                      <span
                        key={sdg}
                        className="text-sm font-semibold px-4 py-1.5 rounded-full"
                        style={{ background: '#ADD8E640', color: '#000080' }}
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlights list */}
                {'highlights' in project && project.highlights && (
                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#6D8196' }} />
                        <span className="text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Key Benefits */}
                {'benefits' in project && project.benefits && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900">Key Benefits</h4>
                    {project.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 rounded-xl"
                        style={{ background: project.light, border: `1px solid ${project.border}` }}
                      >
                        <div
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                          style={{ background: project.accent }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{b.title}</p>
                          <p className="text-sm text-gray-600 mt-0.5">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: '#000080' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaborating?</h2>
          <p className="text-lg mb-8" style={{ color: '#ADD8E6' }}>
            These ventures are open to partnerships, investment discussions, and academic collaborations.
            Reach out to explore how we can work together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-lg transition-opacity hover:opacity-90"
            style={{ background: '#ADD8E6', color: '#000080' }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default EntrepreneurialActivity;
