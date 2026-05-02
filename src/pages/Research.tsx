import React, { useState } from 'react';
import { Copyright, FlaskConical, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const leaderGrants = [
  {
    title: 'An Integrated System for Operational Efficiency, Workforce Scheduling, and Sustainable Management',
    funder: 'Public-Private Research Network',
    amount: 'RM 49,100',
    period: '1 June 2026 – 28 February 2027',
    status: 'ongoing',
  },
  {
    title: 'Genius UMK Madani @ SK Bukit Tiu, Project Kampung Angkat Madani',
    funder: '',
    amount: 'RM 18,120',
    period: '8 September 2025 – 31 December 2025',
    status: 'completed',
  },
  {
    title: 'AIREACH – AI and Robotics Education for Applied Community Hub',
    funder: 'Malaysia International Enrichment Matching Fund (MIEMF)',
    amount: 'RM 11,675',
    period: '',
    status: 'ongoing',
  },
  {
    title: 'Framework for Data Quality in Pre-processing for Food Production Forecasting',
    funder: 'FRGS-EC',
    amount: 'RM 30,000',
    period: '1 October 2024 – 30 September 2026',
    status: 'ongoing',
  },
  {
    title: 'Data Quality and Machine Learning – Towards Automatic Food Security Assessment',
    funder: 'UMK Fund',
    amount: 'RM 5,000',
    period: '19 December 2023 – 18 December 2024',
    status: 'completed',
  },
];

const memberGrants = [
  {
    title: 'Artificial Intelligence in Financial Investment Research Consortium (AIFIC)',
    funder: 'Konsortium Kecemerlangan Penyelidikan',
    amount: 'RM 600,000',
    period: '',
    status: 'ongoing',
  },
  {
    title: 'Enhancing Community Engagement and Resilience in Flood-Prone Areas',
    funder: 'UMK Matching Grant',
    amount: 'RM 30,000',
    period: '',
    status: 'ongoing',
  },
  {
    title: 'Motion and Emotion Detection for Education and Work Environment Using Improved Artificial and Swarm Intelligence Machine Vision System',
    funder: 'UMK Matching Grant',
    amount: '',
    period: '2 November 2023 – 1 November 2025',
    status: 'completed',
  },
  {
    title: 'Optimal Hate Speech Meta-classification for Cyber-Hate Detection Based on Enhanced Machine Learning Heterogeneous Stacked Ensembles (HSE) Algorithm',
    funder: 'Fundamental Research Grant Scheme (FRGS)',
    amount: 'RM 118,050',
    period: '1 October 2023 – 30 September 2026',
    status: 'ongoing',
  },
];

const copyrights = [
  { ref: 'CRFM2023P03399', title: 'User Interface Design for MAR-ORTHO-EDU 2.0' },
  { ref: 'CRLY2023C03251', title: 'Wasteless: Food Waste Management System' },
  { ref: 'CRLY2021P03024', title: 'Veracity Assessment Framework for Big Data Analytics' },
  { ref: 'CRLY2025C09032', title: 'Well (Wellness Enhanced Lifelong Learning) Nexus Educational Framework' },
];

const patents = [
  { ref: 'PI2023002142', title: 'A Computer Implemented Method for Orthodontic Simulation Training System in Clinical Examination using Augmented Reality' },
];

const phdStudents = [
  { name: 'Muhammad Afiq Bin Che Lah', title: 'Mandarin Assessment Application Design Using AI-Based Assessment Mechanism for Improving Writing Skills', status: 'On-going' },
  { name: 'Shi Hui', title: 'Research On Artificial Intelligence Promoting Teaching Reform', status: 'On-going' },
  { name: 'Li Xiao', title: 'Simulation-Based Orthodontic Teaching Model: Development and Evaluation', status: 'On-going' },
  { name: 'Zhang Xiuwan', title: 'Research and Application of Wheel Hub Surface Defect Detection System Based on Machine Vision', status: 'On-going' },
  { name: 'Aimi Syahidah Zulkipli', title: 'Development and Usability Testing of Mobile Application to Support Oral Sensory Motor Therapy', status: 'On-going' },
  { name: 'Jamaliah Mohamad Sopi', title: 'Digital Transformation in Construction', status: 'On-going' },
];

const drDphStudents = [
  { name: 'Nurul Solehah Ismail', title: '', status: 'On-going' },
  { name: 'Mohammad Abu Bakar Bin Mohd Razali', title: '', status: 'On-going' },
];

const fypStudents = [
  { year: 2024, name: 'Nurul Husna Dayini Binti Hamizan', title: 'Food Security Assessment Comprehensive Analysis on Socioeconomic Factors and Food Price', status: 'Completed' },
  { year: 2025, name: 'Nurul Najihah Binti Basari', title: 'AI for Facial Landmark Detection', status: 'Completed' },
  { year: 2025, name: 'Wong Chin Wee', title: 'Machine Learning for Carbon Footprint Prediction', status: 'Completed' },
  { year: 2025, name: 'Sharvin Kumar A/L Arumugam', title: 'Resume Screening System Using Natural Language Processing', status: 'Completed' },
  { year: 2025, name: 'Nik Nur Syarwani Binti Che Mat Yeh', title: 'Food Donation Apps', status: 'Completed' },
  { year: 2025, name: 'Hakimah Mat Harun', title: 'Counselling Reservation System for Universiti Malaysia Kelantan', status: 'Completed' },
  { year: 2025, name: 'Nur Fathi Auni Binti Azlan', title: 'Sentiment Analysis in Music', status: 'On-going' },
  { year: 2025, name: 'Pavethren A/L Batmanathen', title: 'Data Science for Violence Against Women and Children', status: 'Completed' },
  { year: 2025, name: 'Athirah Binti Abdul Wahhab', title: 'Data Analytics and Food Price Prediction in Malaysia', status: 'Completed' },
  { year: 2025, name: 'Muhamad Danish Saiful Rizal', title: 'Automated Detection and Classification of Water Quality Anomalies Using Machine Learning', status: 'Completed' },
  { year: 2025, name: 'Raja Muhammad Izzudin Raja Nordin', title: 'Intelligent Task Management System', status: 'Completed' },
  { year: 2026, name: 'Milashini A/P Saravanan', title: 'AI-Powered Web Application for Course and Career Advisory for SPM Graduates', status: 'Completed' },
  { year: 2026, name: 'Ng Poh Siang', title: 'AI-Powered Mobile App for Digital Habit Reset and Intelligent Task Structuring', status: 'Completed' },
  { year: 2026, name: 'Zamarul Hisyam Bin Mohd Zaini', title: 'Carbon Analysis Application using Computer Vision', status: 'Completed' },
  { year: 2026, name: 'Muhammad Shamierul Iqbal bin Mohd Shamsuddin', title: 'Intelligent Nutrition and Calories Tracking Application', status: 'Completed' },
  { year: 2026, name: 'Nur Izzati binti Mahrup', title: 'Enhancing ESG Ratings Process through Large Language Models', status: 'Completed' },
  { year: 2026, name: 'Fatin Nur Athirah binti Abdul Azim', title: 'Computer Vision for Oral Cancer', status: 'Completed' },
  { year: 2026, name: 'Fatin Nuraina binti Mohd Zahir', title: 'Chatbot for Food Security Analysis', status: 'Completed' },
];

const fypYears = [...new Set(fypStudents.map(s => s.year))].sort();

const StatusBadge = ({ status }: { status: string }) => {
  const ongoing = status.toLowerCase().includes('on-going') || status.toLowerCase() === 'ongoing';
  return (
    <span
      className="text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap"
      style={ongoing
        ? { background: '#fff0fc', color: '#AD56C4' }
        : { background: '#f3f4f6', color: '#6b7280' }
      }
    >
      {ongoing ? 'On-going' : 'Completed'}
    </span>
  );
};

const GrantCard = ({ grant, index }: { grant: typeof leaderGrants[0]; index: number }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <span className="flex-shrink-0 w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center" style={{ background: '#e8ccf3', color: '#AD56C4' }}>
          {index + 1}
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 leading-snug">{grant.title}</p>
          {grant.funder && <p className="text-sm mt-1 font-medium" style={{ color: '#AD56C4' }}>{grant.funder}</p>}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
            {grant.amount && <span className="font-semibold text-gray-700">{grant.amount}</span>}
            {grant.period && <span>{grant.period}</span>}
          </div>
        </div>
      </div>
      <StatusBadge status={grant.status} />
    </div>
  </div>
);

const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-3">
      <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
      <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF8DA1' }}>{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
  </div>
);

const Research = () => {
  const [fypOpen, setFypOpen] = useState<Record<number, boolean>>({ 2024: true, 2025: true, 2026: true });

  const toggleYear = (year: number) =>
    setFypOpen(prev => ({ ...prev, [year]: !prev[year] }));

  const totalGrants = leaderGrants.length + memberGrants.length;
  const totalAmount = [49100, 18120, 11675, 30000, 5000, 600000, 30000, 118050].reduce((a, b) => a + b, 0);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff0f3 0%, #fff0fc 50%, #f7eefb 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF8DA1' }}>Research Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Research</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            An overview of funded research projects, intellectual property, and student supervision
            spanning data science, artificial intelligence, and applied computing.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { value: totalGrants, label: 'Research Grants' },
              { value: `RM ${(totalAmount / 1000).toFixed(0)}K+`, label: 'Total Funding' },
              { value: copyrights.length + patents.length, label: 'IP Registered' },
              { value: phdStudents.length + drDphStudents.length, label: 'PhD Supervisees' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm text-center" style={{ border: '1px solid #ffd6dd' }}>
                <p className="text-2xl font-bold" style={{ color: '#AD56C4' }}>{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grants */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Funding" title="Research Grants" />

          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#AD56C4' }} />
              Project Leader
            </h3>
            <div className="space-y-4">
              {leaderGrants.map((g, i) => <GrantCard key={i} grant={g} index={i} />)}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#FF9CE9' }} />
              Project Member
            </h3>
            <div className="space-y-4">
              {memberGrants.map((g, i) => <GrantCard key={i} grant={g} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Copyright & Patent */}
      <section className="py-20" style={{ background: '#fff7f6' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Intellectual Property" title="Copyright & Patent" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Copyright size={20} style={{ color: '#FF8DA1' }} />
                <h3 className="text-lg font-bold text-gray-800">Copyright</h3>
              </div>
              <div className="space-y-3">
                {copyrights.map((c, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #ffd6dd' }}>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded" style={{ color: '#FF8DA1', background: '#fff0f3' }}>
                      {c.ref}
                    </span>
                    <p className="text-gray-800 font-medium mt-2 text-sm leading-snug">{c.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <FlaskConical size={20} style={{ color: '#AD56C4' }} />
                <h3 className="text-lg font-bold text-gray-800">Patent</h3>
              </div>
              <div className="space-y-3">
                {patents.map((p, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #e8ccf3' }}>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded" style={{ color: '#AD56C4', background: '#f7eefb' }}>
                      {p.ref}
                    </span>
                    <p className="text-gray-800 font-medium mt-2 text-sm leading-snug">{p.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supervision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Mentorship" title="Student Supervision" />

          {/* PhD */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={20} style={{ color: '#FF9CE9' }} />
              <h3 className="text-lg font-bold text-gray-800">Doctor of Philosophy <span className="text-gray-400 font-normal">(Co-Supervisor)</span></h3>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm" style={{ border: '1px solid #ffd6f8' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-white" style={{ background: '#AD56C4' }}>
                    <th className="px-5 py-3 text-left font-semibold w-8">#</th>
                    <th className="px-5 py-3 text-left font-semibold">Student</th>
                    <th className="px-5 py-3 text-left font-semibold hidden md:table-cell">Thesis Title</th>
                    <th className="px-5 py-3 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {phdStudents.map((s, i) => (
                    <tr key={i} className="border-t transition-colors" style={{ borderColor: '#ffd6f8', background: i % 2 === 0 ? 'white' : '#fff0fc' }}>
                      <td className="px-5 py-4 text-gray-400 font-medium">{i + 1}</td>
                      <td className="px-5 py-4 font-semibold text-gray-900">{s.name}
                        {s.title && <p className="text-gray-500 font-normal mt-0.5 md:hidden">{s.title}</p>}
                      </td>
                      <td className="px-5 py-4 text-gray-600 hidden md:table-cell">{s.title}</td>
                      <td className="px-5 py-4"><StatusBadge status={s.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DrDPH */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={20} style={{ color: '#FF8DA1' }} />
              <h3 className="text-lg font-bold text-gray-800">Doctorate in Dental Public Health <span className="text-gray-400 font-normal">(DrDPH)</span></h3>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm" style={{ border: '1px solid #ffd6dd' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-white" style={{ background: '#FF8DA1' }}>
                    <th className="px-5 py-3 text-left font-semibold w-8">#</th>
                    <th className="px-5 py-3 text-left font-semibold">Student</th>
                    <th className="px-5 py-3 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {drDphStudents.map((s, i) => (
                    <tr key={i} className="border-t transition-colors" style={{ borderColor: '#ffd6dd', background: i % 2 === 0 ? 'white' : '#fff0f3' }}>
                      <td className="px-5 py-4 text-gray-400 font-medium">{i + 1}</td>
                      <td className="px-5 py-4 font-semibold text-gray-900">{s.name}</td>
                      <td className="px-5 py-4"><StatusBadge status={s.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FYP */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={20} className="text-gray-600" />
              <h3 className="text-lg font-bold text-gray-800">Final Year Project</h3>
            </div>
            <div className="space-y-4">
              {fypYears.map(year => {
                const students = fypStudents.filter(s => s.year === year);
                const isOpen = fypOpen[year] !== false;
                return (
                  <div key={year} className="overflow-hidden rounded-2xl shadow-sm" style={{ border: '1px solid #e8ccf3' }}>
                    <button
                      onClick={() => toggleYear(year)}
                      className="w-full flex items-center justify-between px-6 py-4 text-white hover:opacity-90 transition-opacity"
                      style={{ background: '#8b3ea3' }}
                    >
                      <span className="font-semibold text-base">Cohort {year}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm opacity-80">{students.length} student{students.length > 1 ? 's' : ''}</span>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>
                    {isOpen && (
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-gray-600" style={{ background: '#f7eefb' }}>
                            <th className="px-5 py-3 text-left font-semibold w-8">#</th>
                            <th className="px-5 py-3 text-left font-semibold">Student</th>
                            <th className="px-5 py-3 text-left font-semibold hidden md:table-cell">Project Title</th>
                            <th className="px-5 py-3 text-left font-semibold">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((s, i) => (
                            <tr key={i} className="border-t transition-colors" style={{ borderColor: '#e8ccf3', background: i % 2 === 0 ? 'white' : '#fff0fc' }}>
                              <td className="px-5 py-4 text-gray-400 font-medium">{i + 1}</td>
                              <td className="px-5 py-4 font-semibold text-gray-900">
                                {s.name}
                                <p className="text-gray-500 font-normal mt-0.5 md:hidden">{s.title}</p>
                              </td>
                              <td className="px-5 py-4 text-gray-600 hidden md:table-cell">{s.title}</td>
                              <td className="px-5 py-4"><StatusBadge status={s.status} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
