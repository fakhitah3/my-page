import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Users, Award, GraduationCap, Briefcase, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
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

const Home = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
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
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Welcome to My
                <span className="text-blue-700 block">Academic Hub</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore my collection of academic presentations, research insights, and
                professional slides covering data science, machine learning, and application development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/slides"
                  className="inline-flex items-center bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Explore My Slides
                  <ChevronRight size={20} className="ml-2" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors font-semibold text-lg"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/Untitled design (4).png"
                  alt="Fakhitah Ridzuan"
                  className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white p-3 rounded-full shadow-lg">
                  <GraduationCap size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 bg-blue-700 rounded" />
            <h2 className="text-sm font-semibold tracking-widest text-blue-700 uppercase">About Me</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fakhitah Ridzuan</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a Senior Lecturer at the Faculty of Data Science and Computing, Universiti Malaysia Kelantan,
            with a PhD in Management of Information System from Universiti Sains Malaysia. My work centres on
            data quality, big data analytics, artificial intelligence in education, and IoT-driven sustainability
            solutions — bridging rigorous research with practical, real-world impact for students and the broader
            academic community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="text-blue-700" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Research Focus</h3>
              <p className="text-sm text-gray-600">AI in Education, Data Analytics, AI and IoT for Sustainability</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Teaching</h3>
              <p className="text-sm text-gray-600">Programming, Application Development, Data Science, Computer Evolution</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="text-amber-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Recognition</h3>
              <p className="text-sm text-gray-600">Royal Scholarship Award Recipient 2017</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Qualification Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 bg-blue-700 rounded" />
            <h2 className="text-sm font-semibold tracking-widest text-blue-700 uppercase">Education</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Academic Qualification</h2>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-700 text-white text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 w-24">Year</th>
                  <th className="px-6 py-4">Qualification</th>
                  <th className="px-6 py-4 hidden md:table-cell">Institution</th>
                </tr>
              </thead>
              <tbody>
                {qualifications.map((q, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-6 py-5 font-bold text-blue-700 text-lg align-top whitespace-nowrap">{q.year}</td>
                    <td className="px-6 py-5 align-top">
                      <p className="font-semibold text-gray-900">{q.degree}</p>
                      {q.thesis && (
                        <p className="text-sm text-gray-500 mt-1 italic">Thesis: "{q.thesis}"</p>
                      )}
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

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 bg-teal-600 rounded" />
            <h2 className="text-sm font-semibold tracking-widest text-teal-600 uppercase">Career</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Professional Experience</h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative sm:pl-16">
                  <div className="hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full items-center justify-center shadow-sm border-2 border-white z-10"
                    style={{ background: exp.current ? '#1d4ed8' : '#f1f5f9' }}>
                    <Briefcase size={20} className={exp.current ? 'text-white' : 'text-gray-500'} />
                  </div>

                  <div className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${exp.current ? 'border-blue-200' : 'border-gray-100'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{exp.role}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start ${
                        exp.current ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium">{exp.org}</p>
                    {exp.place && <p className="text-gray-500 text-sm mt-0.5">{exp.place}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 bg-blue-700 rounded" />
            <h2 className="text-sm font-semibold tracking-widest text-blue-700 uppercase">Contact</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
          <p className="text-gray-600 mb-10">
            I welcome collaboration opportunities, speaking engagements, and research discussions.
          </p>

          {status === 'success' ? (
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
              <CheckCircle size={48} className="text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent</h3>
              <p className="text-gray-600 mb-6">Thank you for reaching out. I will respond within 24–48 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-teal-700 font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="What is this regarding?"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Your message..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
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

              <p className="text-center text-xs text-gray-400">
                I typically respond within 24–48 hours on business days.
              </p>
            </form>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-500">
            <a href="mailto:fakhitah.ridzuan@gmail.com" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
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
