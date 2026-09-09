import { useState } from 'react';
import { Droplets, BarChart3, CheckCircle, Users, GraduationCap, Award, Calendar, Mic, Cpu, X } from 'lucide-react';

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
];

const communityPrograms = [
  {
    id: 1,
    name: 'FSDK@School',
    tagline: 'Youth Empowerment Through Programming',
    icon: GraduationCap,
    description: 'Program FSDK@School membuka peluang kepada belia untuk berkongsi ilmu pengaturcaraan dengan pelajar sekolah, sekaligus memupuk kemahiran komunikasi dan keyakinan diri mereka. Inisiatif ini bukan sahaja memperkasa belia dengan pengalaman mengajar, tetapi juga menggalakkan minat generasi muda dalam bidang teknologi dan inovasi.',
    impact: 'Meningkatkan literasi digital dalam kalangan belia, membangunkan kemahiran teknikal yang relevan dengan industri, serta memberi inspirasi kepada peserta untuk meneroka peluang dalam bidang teknologi dan inovasi.',
    accent: '#000080',
    light: '#ADD8E620',
    border: '#ADD8E6',
  },
  {
    id: 2,
    name: 'Sharing Session @JPN Kelantan',
    tagline: 'POPS Negeri Kelantan 2024',
    icon: Users,
    description: 'Program Outreach Pendidikan Swasta (POPS) Negeri Kelantan 2024. Dalam program ini, saya berpeluang berkongsi pengetahuan berkaitan pengaturcaraan dengan peserta, yang majoritinya terdiri daripada belia. Sesi ini memberi pendedahan kepada konsep asas pengaturcaraan serta aplikasi praktikal dalam dunia digital.',
    impact: 'Meningkatkan literasi digital dalam kalangan belia, membangunkan kemahiran teknikal yang relevan dengan industri, serta memberi inspirasi kepada peserta untuk meneroka peluang dalam bidang teknologi dan inovasi.',
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 3,
    name: 'Youth2Youth @SMK Sultan Ismail',
    tagline: 'Jamboree STEM 2024',
    icon: Users,
    description: 'Saya berpeluang mengendalikan sesi perkongsian sempena Jamboree STEM 2024 di SMK Sultan Ismail, di mana saya berkongsi berkenaan pembangunan aplikasi kepada peserta yang terdiri daripada belia. Sesi ini memberi pendedahan kepada konsep asas pembangunan aplikasi, termasuk reka bentuk antara muka pengguna (UI/UX) dan asas pengaturcaraan.',
    impact: 'Meningkatkan minat belia terhadap bidang teknologi, membina kemahiran asas pembangunan aplikasi, serta menggalakkan inovasi dan kreativiti dalam kalangan generasi muda.',
    accent: '#000080',
    light: '#ADD8E615',
    border: '#ADD8E6',
  },
  {
    id: 4,
    name: 'Code@School',
    tagline: 'IoT & Mobile App Development',
    icon: Calendar,
    description: 'Program ini berjalan sepanjang November 2023 sehingga Januari 2024. Program ini merupakan sebuah aktiviti pemindahan maklumat oleh belia di UMK kepada belia SMK Sultan Ismail. Peserta diberikan pendedahan mengenai Internet of Things (IoT) dan pembangunan aplikasi mudah alih, di mana peserta perlu mengenal pasti permasalahan di sekitar sekolah dan merangka inovasi sebagai penyelesaian.',
    impact: 'Meningkatkan kemahiran teknologi belia, memupuk pemikiran kritis dalam penyelesaian masalah, serta menggalakkan minat terhadap STEM melalui pembelajaran interaktif.',
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 5,
    name: 'Youth2Youth @UMK',
    tagline: 'Block-Based Programming',
    icon: GraduationCap,
    description: 'Program ini bertujuan untuk memperkenalkan konsep asas pengaturcaraan berasaskan blok kepada belia di sekitar Kelantan. Peserta diberikan pendedahan kepada penggunaan blok-blok visual yang mudah difahami untuk membangunkan logik dan struktur pengaturcaraan. Program ini merupakan inisiatif perkongsian ilmu di FSDK, UMK.',
    impact: 'Membantu belia membangunkan pemikiran logik dan kemahiran penyelesaian masalah, serta memberi pendedahan awal kepada dunia pengaturcaraan dan teknologi sebagai persediaan ke arah industri digital.',
    accent: '#000080',
    light: '#ADD8E615',
    border: '#ADD8E6',
  },
  {
    id: 6,
    name: 'Juri Techlympics Zon Timur 2.0 2026',
    tagline: 'Jom Masuk U Zon Timur 2024',
    icon: Award,
    description: 'Dalam program ini, saya telah mengumpulkan beberapa orang belia dari FSDK untuk bersama-sama menjalankan aktiviti berkaitan Kecerdasan Buatan (AI) bagi memberi pendedahan kepada pelajar dan pengunjung tentang teknologi masa hadapan. Sepanjang program, peserta didedahkan kepada konsep asas AI, aplikasi dalam kehidupan seharian, serta demonstrasi interaktif.',
    impact: 'Meningkatkan kesedaran dan minat terhadap AI dalam kalangan pelajar, memperkukuh kemahiran komunikasi serta kepimpinan sukarelawan, dan mempromosikan STEM sebagai bidang pilihan untuk pendidikan tinggi.',
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 7,
    name: 'Penceramah Jemputan KWAP',
    tagline: 'Design Thinking Workshop',
    icon: Mic,
    description: 'Program ini bertujuan untuk memberikan pendedahan kepada staf KWAP mengenai konsep Design Thinking, kaedah penyelesaian masalah yang berfokus kepada pengguna melalui pendekatan kreatif dan inovatif.',
    date: '22 Oktober 2024',
    organization: 'Kumpulan Wang Persaraan (Diperbadankan) (KWAP)',
    accent: '#000080',
    light: '#ADD8E615',
    border: '#ADD8E6',
  },
  {
    id: 8,
    name: 'Penceramah Jemputan IKMA',
    tagline: 'AI for Cooperatives',
    icon: Mic,
    description: 'Program perkongsian ini bertujuan untuk memberikan pendedahan kepada anggota koperasi mengenai kepentingan dan aplikasi Kecerdasan Buatan (AI) dalam meningkatkan kecekapan operasi perniagaan. Dalam sesi ini, peserta diperkenalkan kepada konsep asas AI, penggunaan data untuk membuat keputusan, serta bagaimana AI dapat membantu koperasi dalam pengurusan sumber, pemasaran, dan perkhidmatan pelanggan.',
    date: '10 Julai 2024',
    organization: 'Institut Koperasi Malaysia (IKMa) Zon Timur',
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
  },
  {
    id: 9,
    name: 'Karnival Minggu Sains Negara Peringkat Negeri Kelantan',
    tagline: 'AI & Industry 4.0/5.0 Awareness',
    icon: Calendar,
    description: 'Sesi perkongsian ini merupakan sebahagian daripada inisiatif Minggu Sains Negara yang bertujuan untuk meningkatkan kesedaran masyarakat, khususnya belia, mengenai perkembangan Kecerdasan Buatan (AI) dan Revolusi Industri 4.0 & 5.0.',
    date: 'Ogos 2024',
    organization: 'Bahagian Pengurusan Teknologi Maklumat Pejabat Setiausaha Kerajaan Negeri Kelantan dan Kelantan ICT Gateway Sdn. Bhd.',
    accent: '#000080',
    light: '#ADD8E615',
    border: '#ADD8E6',
  },
  {
    id: 10,
    name: 'Panel Interview Biasiswa Yang Dipertuan Agong',
    tagline: 'BYDPA Selection Panel',
    icon: Award,
    description: 'Dilantik sebagai panel temuduga bagi Biasiswa Yang di-Pertuan Agong (BYDPA). BYDPA adalah program biasiswa berprestij yang ditawarkan oleh Jabatan Perkhidmatan Awam Malaysia kepada individu yang terpilih.',
    accent: '#6D8196',
    light: '#6D819615',
    border: '#6D819660',
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
              { value: '4', label: 'Tech Project' },
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
                <p className="text-gray-600">{prog.text}</p>
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
