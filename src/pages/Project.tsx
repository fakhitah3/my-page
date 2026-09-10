import { useState } from 'react';
import { Droplets, BarChart3, CheckCircle, Cpu, X, Stethoscope, Heart } from 'lucide-react';

const techProjects = [
  {
    id: 1,
    name: 'EcoWatch',
    tagline: 'Smart Data, Healthier Shrimp',
    icon: Droplets,
    image: '/Ecowatch.png',
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
    image: '/Carbonlens.png',
    description:
      'Carbonlens is a web-based platform that provides an intelligent idea of technology and AI to ensure that ESG reporting becomes quicker, more precise, and significant. Compared to the conventional manual system, which is time-consuming and can easily cause errors, Carbonlens offers a single platform to run Scope 1, 2 and 3 emissions with ease.',
    highlights: ['Scope 1, 2 & 3 emissions tracking', 'AI-powered ESG reporting', 'Faster and more accurate than manual systems'],
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 3,
    name: 'AI Driven Integrated Platform',
    tagline: 'Connecting Business Operations',
    icon: Cpu,
    image: '/AI Driven Integrated Platform.png',
    description:
      'An integrated platform that connects business operations through three main modules, leveraging AI to optimize efficiency and support sustainability goals.',
    modules: [
      {
        title: 'Digital Record-Keeper (Module A)',
        desc: 'Tracks customer orders live from receipt to shipping and automatically digitizes supplier paper receipts'
      },
      {
        title: 'AI Work Scheduler (Module B)',
        desc: 'Uses smart algorithms to assign workers and run machinery efficiently, cutting down on idle time and energy waste'
      },
      {
        title: 'Sustainability Dashboard (Module C)',
        desc: 'Combines business and resource data in one real-time interface to support ESG compliance and data-backed decision-making'
      }
    ],
    accent: '#000080',
    light: '#ADD8E615',
    border: '#ADD8E6',
  },
  {
    id: 4,
    name: 'AI-driven Food and Community Understanding System',
    tagline: 'Addressing Food Insecurity with AI',
    icon: BarChart3,
    image: '/aifocus.png',
    description:
      'AI-powered data platform designed to address food insecurity and improve access to nutrition by providing real-time analysis for targeted policy decisions.',
    sdgs: ['SDG 2 – Zero Hunger', 'SDG 3 – Good Health and Well-being'],
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 5,
    name: 'VLearn-Ortho',
    tagline: 'Intelligent Orthodontic Education Platform',
    icon: Stethoscope,
    image: '/vlearn.png',
    description:
      'VLearn-Ortho (or V-LeARn Ortho) is an intelligent orthodontic education platform designed to enhance clinical examination and diagnostic training for dental students.',
    highlights: [
      'Combines 3D Augmented Reality (AR) rendering, haptic feedback, and deep learning',
      'Features marker-less facial recognition and deep learning models for soft-tissue landmark identification and assessment'
    ],
    accent: '#000080',
    light: '#ADD8E620',
    border: '#ADD8E6',
  },
  {
    id: 6,
    name: 'Vision-AI',
    tagline: 'Digital Health Interface',
    icon: BarChart3,
    image: '/visionai.png',
    description:
      'Vision-AI is a digital health interface designed to automate dietary tracking, food identification, and personalized calorie estimation for health and nutrition education.',
    highlights: [
      'Automates dietary tracking through AI-powered food identification',
      'Provides personalized calorie estimation for health and nutrition education'
    ],
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 7,
    name: 'Kongsi Rezeki',
    tagline: 'Digital Campus Food Bank',
    icon: Heart,
    image: '/kongsirezeki.png',
    description:
      'Kongsi Rezeki is a digital campus food bank web application developed by Kumpulan Food Angel under the Office of the Deputy Vice-Chancellor for Student Affairs and Alumni (TNC HEPA) at Universiti Malaysia Kelantan (UMK).',
    highlights: [
      'Developed using a Design Thinking methodology',
      'Addresses food security issues among university students, particularly those from B40 and underprivileged backgrounds facing financial hardship'
    ],
    accent: '#000080',
    light: '#ADD8E620',
    border: '#ADD8E6',
  },
];

const Project = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #FFFAFA 0%, #ADD8E620 60%, #6D819610 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Innovation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Building technology ventures and empowering communities through education and outreach programs.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-sm">
            {[
              { value: '7', label: 'Tech Project' },
              { value: '10', label: 'Community Programs' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm text-center" style={{ border: '1px solid #ADD8E6' }}>
                <p className="text-2xl font-bold" style={{ color: '#000080' }}>{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <h2 className="text-3xl font-bold text-gray-900">Tech Ventures</h2>
          </div>
          <div className="space-y-16">
            {techProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual panel */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                    style={{ border: `1px solid ${project.border}` }}
                    onClick={() => setSelectedImage(project.image)}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    )}
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

                  {/* Modules list */}
                  {'modules' in project && project.modules && (
                    <div className="space-y-4 mb-6">
                      <h4 className="font-bold text-gray-900">Key Modules</h4>
                      {project.modules.map((m, i) => (
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
                            <p className="font-semibold text-gray-900">{m.title}</p>
                            <p className="text-sm text-gray-600 mt-0.5">{m.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <h2 className="text-3xl font-bold text-gray-900">Community Engagement</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: 'techlympics.jpeg',
                title: '2026 - Techlympics Zon Timur 2.0',
              },
              {
                image: 'ssm.jpg',
                title: 'SSM Consultant',
              },
              {
                image: 'teachyouai.jpg',
                title: 'Sharing on STEM with SK Kedai Buloh 2',
              },
              {
                image: 'genius2.jpeg',
                title: 'Genius UMK Madani with SMK Machang',
              },
              {
                image: 'genius.jpeg',
                title: 'Genius UMK Madani @ SK Bukit Tiu',
              },
              {
                image: 'ifuture.jpeg',
                title: 'IFuture - Sharing Session with Youth in Kota Bharu',
              },
              {
                image: 'aireach1.jpg',
                title: 'AI Sharing Session with SMK Kubang Kerian 3',
              },
              {
                image: 'aireach2.jpg',
                title: 'AI Sharing Session with SMKA Naim Lilbanat',
              },
              {
                image: 'y2y.jpg',
                title: 'Youth-to-Youth AI Sharing Session',
              },
              {
                image: 'punb.jpeg',
                title: 'PUNB x UMK',
              },
              {
                image: 'speaker.jpeg',
                title: 'Future of AI at Maahad Sains Tok Guru',
              },
            ].map((prog, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="relative">
                  <img
                    src={`/${prog.image}`}   
                    alt={prog.title}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{prog.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Interested in Collaborating?</h2>
          <p className="text-lg mb-8 text-gray-600">
            These ventures and programs are open to partnerships, investment discussions, and academic collaborations.
            Reach out to explore how we can work together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-lg transition-opacity hover:opacity-90"
            style={{ background: '#000080', color: '#ffffff' }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Project;
