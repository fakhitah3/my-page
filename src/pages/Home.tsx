import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, BookOpen, Users, Award, Briefcase, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const qualifications = [
  {
    year: '2021',
    degree: 'Doctor of Philosophy – Management of Information System',
    thesis: 'Framework to enhance veracity and quality of Big Data',
    institution: 'Universiti Sains Malaysia',
  },
  {
    year: '2016',
    degree: 'Bachelor of Computer Science (Software Engineering)',
    thesis: null,
    institution: 'Universiti Teknologi Malaysia',
  },
];

const experiences = [
  {
    period: 'Dec 2022 – Present',
    role: 'Senior Lecturer',
    org: 'Faculty of Data Science and Computing',
    place: 'Universiti Malaysia Kelantan',
    current: true,
  },
  {
    period: 'Mar 2022 – Dec 2022',
    role: 'Lecturer',
    org: 'School of Engineering and Technology',
    place: 'INTI International College Penang',
    current: false,
  },
  {
    period: 'Apr 2021 – Feb 2022',
    role: 'Research Officer',
    org: 'Dental Simulation and Virtual Learning Research Excellence Consortium',
    place: 'Universiti Sains Malaysia',
    current: false,
  },
  {
    period: 'Oct 2016 – Aug 2017',
    role: 'System Analyst',
    org: 'Seagate Global Business Services (M) Sdn Bhd',
    place: '',
    current: false,
  },
];

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

const Home = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const { error } = await supabase.from('contact_messages').insert([
        { name: form.name, email: form.email, subject: form.subject, message: form.message },
      ]);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-16">

      {/* ── HERO / ABOUT ME ─────────────────────────────────────── */}
      <section className="min-h-screen flex items-center" style={{ background: '#FFFAFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left – text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>About Me</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 leading-tight">
                Fakhitah Ridzuan
              </h1>
              <p className="text-lg font-medium mb-6" style={{ color: '#000080' }}>
                Senior Lecturer · Faculty of Data Science and Computing, UMK
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I am a Senior Lecturer at Universiti Malaysia Kelantan with a PhD in Management of
                Information System from Universiti Sains Malaysia. My work centres on data quality,
                big data analytics, artificial intelligence in education, and IoT-driven sustainability
                solutions — bridging rigorous research with real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/slides"
                  className="inline-flex items-center justify-center text-white px-7 py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 shadow-lg"
                  style={{ background: '#000080' }}
                >
                  Explore My Slides
                  <ChevronRight size={18} className="ml-2" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold border-2 transition-colors"
                  style={{ borderColor: '#000080', color: '#000080' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#000080'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#000080'; }}
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right – photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full translate-x-3 translate-y-3" style={{ background: '#ADD8E6', zIndex: 0 }} />
                <img
                  src="/profile-photo.png"
                  alt="Fakhitah Ridzuan"
                  className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                  style={{ zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMIC QUALIFICATION ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Academic Qualification</h2>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="text-white text-sm uppercase tracking-wider" style={{ background: '#000080' }}>
                  <th className="px-6 py-4 w-24">Year</th>
                  <th className="px-6 py-4">Qualification</th>
                  <th className="px-6 py-4 hidden md:table-cell">Institution</th>
                </tr>
              </thead>
              <tbody>
                {qualifications.map((q, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-100 transition-colors"
                    style={{ background: i % 2 === 0 ? 'white' : '#FFFAFA' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#ADD8E620')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? 'white' : '#FFFAFA')}
                  >
                    <td className="px-6 py-5 font-bold text-lg align-top whitespace-nowrap" style={{ color: '#000080' }}>{q.year}</td>
                    <td className="px-6 py-5 align-top">
                      <p className="font-semibold text-gray-900">{q.degree}</p>
                      {q.thesis && <p className="text-sm text-gray-500 mt-1 italic">Thesis: "{q.thesis}"</p>}
                      <p className="text-sm text-gray-600 mt-1 md:hidden">{q.institution}</p>
                    </td>
                    <td className="px-6 py-5 text-gray-600 hidden md:table-cell align-top">{q.institution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL EXPERIENCE ─────────────────────────────── */}
      <section className="py-20" style={{ background: '#FFFAFA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Career</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Professional Experience</h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block" style={{ background: '#ADD8E6' }} />
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative sm:pl-16">
                  <div
                    className="hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full items-center justify-center shadow-sm border-2 border-white z-10"
                    style={{ background: exp.current ? '#000080' : '#ADD8E640' }}
                  >
                    <Briefcase size={20} style={{ color: exp.current ? 'white' : '#6D8196' }} />
                  </div>
                  <div
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border"
                    style={{ borderColor: exp.current ? '#ADD8E6' : '#e5e7eb' }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{exp.role}</h3>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start"
                        style={exp.current
                          ? { background: '#ADD8E640', color: '#000080' }
                          : { background: '#f3f4f6', color: '#6b7280' }
                        }
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-medium text-gray-700">{exp.org}</p>
                    {exp.place && <p className="text-gray-500 text-sm mt-0.5">{exp.place}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHING EXPERIENCE ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Teaching</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Teaching Experience</h2>
          <p className="text-gray-500 mb-10 text-sm">Click a subject to view its slides.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teachingSubjects.map(course => (
              <button
                key={course.code}
                onClick={() => navigate(`/slides?topic=${encodeURIComponent(course.topic)}`)}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all text-left group border"
                style={{ borderColor: '#ADD8E6' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ADD8E620'; (e.currentTarget as HTMLElement).style.borderColor = '#6D8196'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'white'; (e.currentTarget as HTMLElement).style.borderColor = '#ADD8E6'; }}
              >
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ color: '#000080', background: '#ADD8E640' }}>
                  {course.code}
                </span>
                <p className="font-semibold text-gray-800 mt-3 leading-snug">{course.title}</p>
                <p className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#6D8196' }}>View slides →</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ background: '#FFFAFA' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
          <p className="text-gray-600 mb-10">I welcome collaboration opportunities, speaking engagements, and research discussions.</p>

          {status === 'success' ? (
            <div className="rounded-xl p-8 text-center border" style={{ background: '#ADD8E620', borderColor: '#ADD8E6' }}>
              <CheckCircle size={48} className="mx-auto mb-4" style={{ color: '#000080' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent</h3>
              <p className="text-gray-600 mb-6">Thank you for reaching out. I will respond within 24–48 hours.</p>
              <button onClick={() => setStatus('idle')} className="font-semibold hover:underline" style={{ color: '#000080' }}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text" required value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none transition"
                    onFocus={e => (e.target.style.borderColor = '#000080')}
                    onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email" required value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none transition"
                    onFocus={e => (e.target.style.borderColor = '#000080')}
                    onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text" required value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="What is this regarding?"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none transition"
                  onFocus={e => (e.target.style.borderColor = '#000080')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Your message..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none transition resize-none"
                  onFocus={e => (e.target.style.borderColor = '#000080')}
                  onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit" disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg transition-opacity font-semibold disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
                style={{ background: '#000080' }}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">I typically respond within 24–48 hours on business days.</p>
            </form>
          )}

          <div className="mt-8 flex justify-center text-sm">
            <a href="mailto:fakhitah.ridzuan@gmail.com" className="flex items-center gap-2 transition-opacity hover:opacity-70" style={{ color: '#6D8196' }}>
              <Mail size={16} />
              fakhitah.ridzuan@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
