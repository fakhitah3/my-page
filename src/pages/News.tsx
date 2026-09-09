import { ExternalLink, Newspaper } from 'lucide-react';

const mediaArticles = [
  {
    title: 'SK Kedai Buloh 2 Perkasa Literasi AI dan STEM Melalui Teach You AI',
    source: 'Sinar Bestari',
    url: 'https://sinarbestari.sinarharian.com.my/article/650254/sekolah-kebangsaan/sk-kedai-buloh-2-perkasa-literasi-ai-dan-stem-melalui-teach-you-ai',
  },
  {
    title: 'Penggunaan AI Dalam Pendidikan Pembelajaran Lebih Lancar Menarik - Ahli Akademik',
    source: 'Astro Awani',
    url: 'https://www.astroawani.com/berita-malaysia/penggunaan-ai-dalam-pendidikan-pembelajaran-lebih-lancar-menarik-ahli-akademik-481184',
  },
  {
    title: '12 Harapan Negara',
    source: 'Harian Metro',
    url: 'https://www.hmetro.com.my/mutakhir/2017/05/232173/12-harapan-negara',
  },
];

const News = () => {
  return (
    <div className="pt-16 min-h-screen" style={{ background: '#FFFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6D8196' }}>Media Coverage</span>
            <div className="h-1 w-10 rounded" style={{ background: '#ADD8E6' }} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Featured articles and media coverage about my work in AI education and research.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {mediaArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border group"
                style={{ borderColor: '#ADD8E6' }}
                onMouseEnter={e => { 
                  (e.currentTarget as HTMLElement).style.background = '#ADD8E620'; 
                  (e.currentTarget as HTMLElement).style.borderColor = '#6D8196'; 
                }}
                onMouseLeave={e => { 
                  (e.currentTarget as HTMLElement).style.background = 'white'; 
                  (e.currentTarget as HTMLElement).style.borderColor = '#ADD8E6'; 
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full flex-shrink-0" style={{ background: '#ADD8E620' }}>
                    <Newspaper size={22} style={{ color: '#000080' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-900 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#6D8196' }}>
                      <span className="font-medium">{article.source}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
