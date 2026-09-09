import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const awards = [
  { title: 'Silver Medal', event: 'International Teaching Enhancement and Learning Innovation 2026', category: '', project: 'A Conceptual Vision-AI Interface to Enhance Hands-On Student Learning in Dietary Assessment', year: 2026, tier: 'silver' },
  { title: 'Anugerah Perkhidmatan Cemerlang 2025', event: 'Anugerah Perkhidmatan Cemerlang 2025 UMK', category: '', project: '', year: 2026, tier: 'special' },
  { title: 'Johan', event: 'Kupulan Inovatif dan Kreatif (KIK) Peringkat UMK', category: '', project: 'Kongsi Rezeki', year: 2026, tier: 'gold' },
  { title: 'Tempat Ke-3', event: 'Konvensyen Horizon Baharu Kumpulan Inovatif dan Kreatif Universiti Awam (KIK UA)', category: '', project: 'Kongsi Rezeki', year: 2026, tier: 'bronze' },
  { title: 'Outstanding Entrepreneurship Mentor', event: 'OEM Tahun 2025', category: '', project: '', year: 2026, tier: 'special' },
  { title: 'Gold Award', event: 'Academic Fiesta @ USM 2025', category: 'Innovation of Teaching & Learning Materials', project: 'V-Learn Ortho: Intelligent Augmented Reality for Enhancing Dental Education and Training', year: 2025, tier: 'gold' },
  { title: 'Gold Award', event: 'International Teaching Enhancement & Learning Innovation Carnival 2025', category: '', project: 'Lexitune: From Hanzi to Hiragana', year: 2025, tier: 'gold' },
  { title: 'Top 10 Prestasi Cemerlang LNPT 2024', event: 'Anugerah Perkhidmatan Cemerlang 2024 UMK', category: '', project: '', year: 2025, tier: 'special' },
  { title: 'Anugerah Nadi Keusahawanan', event: 'UMK Entrepreneurship Awards 2024', category: '', project: '', year: 2024, tier: 'special' },
  { title: '3rd Place', event: 'Anugerah Perdana Belia Negara Peringkat Negeri Kelantan 2025', category: "Women's Individual Category", project: '', year: 2025, tier: 'bronze' },
  { title: 'Gold Medal', event: 'EKSPO REKACIPTA UniMAP 2025 (EREKA 2025)', category: '', project: 'AIFocus: AI-Driven Food and Community Understanding System', year: 2025, tier: 'gold' },
  { title: 'Best Video Presentation', event: 'EKSPO REKACIPTA UniMAP 2025 (EREKA 2025)', category: '', project: 'AIFocus: AI-Driven Food and Community Understanding System', year: 2025, tier: 'special' },
  { title: 'Second Prize', event: 'Huawei ICT Competition 2024–2025 Teaching Competition', category: 'Experimental Teaching Cases Track', project: '', year: 2025, tier: 'silver' },
  { title: 'Gold Medal', event: 'Carnival of Research and Innovation 2024', category: '', project: 'AIFocus: AI-Driven Food and Community Understanding System', year: 2024, tier: 'gold' },
  { title: 'Gold Medal', event: 'Carnival of Research and Innovation 2024', category: '', project: 'AkaunMate: Simplifying Accounting for Malaysians Micro Entrepreneurs', year: 2024, tier: 'gold' },
  { title: 'Best Presenter', event: 'Carnival of Research and Innovation 2024', category: '', project: 'AIFocus: AI-Driven Food and Community Understanding System', year: 2024, tier: 'special' },
  { title: '1st Runner Up', event: 'Anugerah Perdana Belia Negara Peringkat Negeri Kelantan 2024', category: "Women's Individual Category", project: '', year: 2024, tier: 'silver' },
  { title: 'Gold Medal', event: 'Innovations in Teaching & Learning Competition (INTELEC) 2023', category: 'Universiti Sains Malaysia', project: 'MAR-ORTHO-EDU: Markerless Haptic Enabled Mobile Augmented Reality System For Orthodontic Education', year: 2023, tier: 'gold' },
  { title: '1st Runner-up', event: 'AI Impact Shaper, 2022 Intel Building Digital Readiness Program', category: '', project: 'PEAL – Personalized Assessment and Learning', year: 2022, tier: 'silver' },
];

const tierConfig: Record<string, { bg: string; badgeBg: string; badgeColor: string; icon: React.ReactNode; borderColor: string }> = {
  gold:    { bg: '#ADD8E620', badgeBg: '#ADD8E640', badgeColor: '#000080', icon: <Medal size={18} style={{ color: '#000080' }} />,    borderColor: '#ADD8E6' },
  silver:  { bg: '#6D819615', badgeBg: '#6D819630', badgeColor: '#6D8196', icon: <Medal size={18} style={{ color: '#6D8196' }} />,    borderColor: '#6D819660' },
  bronze:  { bg: '#FFFAFA',   badgeBg: '#ADD8E620', badgeColor: '#6D8196', icon: <Trophy size={18} style={{ color: '#6D8196' }} />,   borderColor: '#ADD8E6' },
  special: { bg: '#000080', badgeBg: 'rgba(173,216,230,0.3)', badgeColor: 'white', icon: <Star size={18} className="text-white" />,   borderColor: '#000080' },
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
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #FFFAFA 0%, #ADD8E620 60%, #6D819610 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Recognition</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Awards & Honours</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of awards and recognitions received across research, teaching innovation, and entrepreneurial excellence.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { value: goldCount,    label: 'Gold Awards',    color: '#000080' },
              { value: silverCount,  label: 'Silver Awards',  color: '#6D8196' },
              { value: bronzeCount,  label: 'Bronze Awards',  color: '#ADD8E6' },
              { value: specialCount, label: 'Special Awards', color: '#6D8196' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm text-center" style={{ border: '1px solid #ADD8E6' }}>
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
                <div className="flex-1 h-px" style={{ background: '#ADD8E6' }} />
                <span className="text-sm font-medium" style={{ color: '#6D8196' }}>
                  {awards.filter(a => a.year === year).length} award{awards.filter(a => a.year === year).length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="space-y-3">
                {awards.filter(a => a.year === year).map((award, i) => {
                  const cfg = tierConfig[award.tier];
                  return (
                    <div
                      key={i}
                      className="rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                      style={{ background: cfg.bg, border: `1px solid ${cfg.borderColor}` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">{cfg.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: cfg.badgeBg, color: cfg.badgeColor }}>
                              {award.title}
                            </span>
                            {award.category && <span className="text-xs text-gray-500">{award.category}</span>}
                          </div>
                          <p className="font-semibold text-gray-900 leading-snug"
                            style={award.tier === 'special' ? { color: 'white' } : {}}
                          >{award.event}</p>
                          {award.project && (
                            <p className="text-sm mt-1 italic"
                              style={award.tier === 'special' ? { color: '#ADD8E6' } : { color: '#6b7280' }}
                            >{award.project}</p>
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
