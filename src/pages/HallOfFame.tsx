import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, Calendar, Medal } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Achievement {
  id: string;
  student_name: string;
  achievement_title: string;
  description: string;
  category: string;
  date_achieved: string;
  image_url?: string;
}

const HallOfFame = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('date_achieved', { ascending: false });
      if (error) throw error;
      setAchievements(data || []);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))];
  const filteredAchievements = selectedCategory === 'All'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'competition': return Trophy;
      case 'research': return Star;
      case 'leadership': return Medal;
      default: return Award;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case 'competition': return 'linear-gradient(135deg, #FF8DA1, #FFC2BA)';
      case 'research': return 'linear-gradient(135deg, #FF9CE9, #FFC2BA)';
      case 'leadership': return 'linear-gradient(135deg, #AD56C4, #FF9CE9)';
      default: return 'linear-gradient(135deg, #FFC2BA, #FF8DA1)';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="pt-16">
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fff0f3 0%, #fff0fc 50%, #f7eefb 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl" style={{ background: 'linear-gradient(135deg, #FF8DA1, #AD56C4)' }}>
              <Trophy className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hall of Fame</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the remarkable achievements and success stories of our outstanding students
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 rounded-full font-medium transition-all"
                style={selectedCategory === category
                  ? { background: '#AD56C4', color: 'white', boxShadow: '0 4px 14px #AD56C440' }
                  : { background: '#f7eefb', color: '#8b3ea3' }
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#fff0fc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-t-transparent" style={{ borderColor: '#AD56C4', borderTopColor: 'transparent' }}></div>
              <p className="mt-4 text-gray-600">Loading achievements...</p>
            </div>
          ) : filteredAchievements.length === 0 ? (
            <div className="text-center py-20">
              <Award className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Achievements Yet</h3>
              <p className="text-gray-500">Check back soon for inspiring success stories!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAchievements.map(achievement => {
                const Icon = getCategoryIcon(achievement.category);
                const gradient = getCategoryGradient(achievement.category);
                return (
                  <div
                    key={achievement.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{ border: '1px solid #ffd6f8' }}
                  >
                    {achievement.image_url ? (
                      <div className="h-48 overflow-hidden bg-gray-100">
                        <img src={achievement.image_url} alt={achievement.achievement_title} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="h-48 flex items-center justify-center" style={{ background: gradient }}>
                        <Icon className="text-white" size={80} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: gradient }}>
                          {achievement.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(achievement.date_achieved)}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.student_name}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">{achievement.achievement_title}</h4>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 text-white" style={{ background: 'linear-gradient(135deg, #FF8DA1, #AD56C4)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Success Story</h2>
          <p className="text-xl text-white/90">
            Every achievement begins with dedication and hard work. Keep striving for excellence!
          </p>
        </div>
      </section>
    </div>
  );
};

export default HallOfFame;
