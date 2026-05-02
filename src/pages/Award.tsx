import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const awards = [
  {
    title: 'Gold Award',
    event: 'Academic Fiesta @ USM 2025',
    category: 'Innovation of Teaching & Learning Materials',
    project: 'V-Learn Ortho: Intelligent Augmented Reality for Enhancing Dental Education and Training',
    year: 2025,
    tier: 'gold',
  },
  {
    title: 'Gold Award',
    event: 'International Teaching Enhancement & Learning Innovation Carnival 2025',
    category: '',
    project: 'Lexitune: From Hanzi to Hiragana',
    year: 2025,
    tier: 'gold',
  },
  {
    title: 'Top 10 Prestasi Cemerlang LNPT 2024',
    event: 'Anugerah Perkhidmatan Cemerlang 2024 UMK',
    category: '',
    project: '',
    year: 2024,
    tier: 'special',
  },
  {
    title: 'Anugerah Nadi Keusahawanan',
    event: 'UMK Entrepreneurship Awards 2024',
    category: '',
    project: '',
    year: 2024,
    tier: 'special',
  },
  {
    title: '3rd Place',
    event: 'Anugerah Perdana Belia Negara Peringkat Negeri Kelantan 2025',
    category: "Women's Individual Category",
    project: '',
    year: 2025,
    tier: 'bronze',
  },
  {
    title: 'Gold Medal',
    event: 'EKSPO REKACIPTA UniMAP 2025 (EREKA 2025)',
    category: '',
    project: 'AIFocus: AI-Driven Food and Community Understanding System',
    year: 2025,
    tier: 'gold',
  },
  {
    title: 'Best Video Presentation',
    event: 'EKSPO REKACIPTA UniMAP 2025 (EREKA 2025)',
    category: '',
    project: 'AIFocus: AI-Driven Food and Community Understanding System',
    year: 2025,
    tier: 'special',
  },
  {
    title: 'Second Prize',
    event: 'Huawei ICT Competition 2024–2025 Teaching Competition',
    category: 'Experimental Teaching Cases Track',
    project: '',
    year: 2025,
    tier: 'silver',
  },
  {
    title: 'Gold Medal',
    event: 'Carnival of Research and Innovation 2024',
    category: '',
    project: 'AIFocus: AI-Driven Food and Community Understanding System',
    year: 2024,
    tier: 'gold',
  },
  {
    title: 'Gold Medal',
    event: 'Carnival of Research and Innovation 2024',
    category: '',
    project: 'AkaunMate: Simplifying Accounting for Malaysians Micro Entrepreneurs',
    year: 2024,
    tier: 'gold',
  },
  {
    title: 'Best Presenter',
    event: 'Carnival of Research and Innovation 2024',
    category: '',
    project: 'AIFocus: AI-Driven Food and Community Understanding System',
    year: 2024,
    tier: 'special',
  },
  {
    title: '1st Runner Up',
    event: 'Anugerah Perdana Belia Negara Peringkat Negeri Kelantan 2024',
    category: "Women's Individual Category",
    project: '',
    year: 2024,
    tier: 'silver',
  },
  {
    title: 'Gold Medal',
    event: 'Innovations in Teaching & Learning Competition (INTELEC) 2023',
    category: 'Universiti Sains Malaysia',
    project: 'MAR-ORTHO-EDU: Markerless Haptic Enabled Mobile Augmented Reality System For Orthodontic Education',
    year: 2023,
    tier: 'gold',
  },
  {
    title: '1st Runner-up',
    event: 'AI Impact Shaper, 2022 Intel Building Digital Readiness Program',
    category: '',
    project: 'PEAL – Personalized Assessment and Learning',
    year: 2022,
    tier: 'silver',
  },
];

const tierConfig: Record<string, { gradient: string; badgeBg: string; badgeColor: string; icon: React.ReactNode; cardBorder: string; cardBg: string }> = {
  gold: {
    gradient: 'linear-gradient(135deg, #FF8DA1, #FFC2BA)',
    badgeBg: '#fff0f3',
    badgeColor: '#FF8DA1',
    icon: <Medal size={20} style={{ color: '#FF8DA1' }} />,
    cardBorder: '#ffd6dd',
    cardBg: '#fff0f3',
  },
  silver: {
    gradient: 'linear-gradient(135deg, #FF9CE9, #FFC2BA)',
    badgeBg: '#fff0fc',
    badgeColor: '#FF9CE9',
    icon: <Medal size={20} style={{ color: '#FF9CE9' }} />,
    cardBorder: '#ffd6f8',
    cardBg: '#fff0fc',
  },
  bronze: {
    gradient: 'linear-gradient(135deg, #FFC2BA, #FF8DA1)',
    badgeBg: '#fff7f6',
    badgeColor: '#FFC2BA',
    icon: <Trophy size={20} style={{ color: '#FFC2BA' }} />,
    cardBorder: '#ffe8e5',
    cardBg: '#fff7f6',
  },
  special: {
    gradient: 'linear-gradient(135deg, #AD56C4, #FF9CE9)',
    badgeBg: '#f7eefb',
    badgeColor: '#AD56C4',
    icon: <Star size={20} style={{ color: '#AD56C4' }} />,
    cardBorder: '#e8ccf3',
    cardBg: '#f7eefb',
  },
};

const years = [...new Set(awards.map(a => a.year))].sort((a, b) => b - a);

const Award = () => {
  const goldCount = awards.filter(a => a.tier === 'gold').length;
  const silverCount = awards.filter(a => a.tier === 'silver').length;
  const bronzeCount = awards.filter(a => a.tier === 'bronze').length;
  const specialCount = awards.filter(a => a.tier === 'special').length;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff0f3 0%, #fff0fc 50%, #f7eefb 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#FF8DA1' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF8DA1' }}>Recognition</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Awards & Honours</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of awards and recognitions received across research, teaching innovation, and entrepreneurial excellence.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { value: goldCount, label: 'Gold Awards', color: '#FF8DA1' },
              { value: silverCount, label: 'Silver Awards', color: '#FF9CE9' },
              { value: bronzeCount, label: 'Bronze Awards', color: '#FFC2BA' },
              { value: specialCount, label: 'Special Awards', color: '#AD56C4' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm text-center" style={{ border: '1px solid #ffd6f8' }}>
                <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards by Year */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {years.map(year => (
            <div key={year} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{year}</h2>
                <div className="flex-1 h-px" style={{ background: '#ffd6f8' }} />
                <span className="text-sm font-medium" style={{ color: '#AD56C4' }}>
                  {awards.filter(a => a.year === year).length} award{awards.filter(a => a.year === year).length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-4">
                {awards.filter(a => a.year === year).map((award, i) => {
                  const cfg = tierConfig[award.tier];
                  return (
                    <div
                      key={i}
                      className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                      style={{ background: cfg.cardBg, border: `1px solid ${cfg.cardBorder}` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-0.5">{cfg.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: cfg.badgeBg, color: cfg.badgeColor }}>
                              {award.title}
                            </span>
                            {award.category && (
                              <span className="text-xs text-gray-500 font-medium">{award.category}</span>
                            )}
                          </div>
                          <p className="font-semibold text-gray-900 leading-snug">{award.event}</p>
                          {award.project && (
                            <p className="text-sm text-gray-600 mt-1 italic">{award.project}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Award;
