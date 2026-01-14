import { motion } from 'framer-motion';
import { Music, Star, Award, Mic } from 'lucide-react';
import discography from '../data/discography.json';

const typeIcons = {
  'A-Side': Star,
  'B-Side': Music,
  'Digital': Mic
};

const typeColors = {
  'A-Side': 'from-pink-500 to-rose-500',
  'B-Side': 'from-green-400 to-emerald-500',
  'Digital': 'from-purple-500 to-indigo-500'
};

export default function Discography() {
  const allSongs = [
    ...discography.singles.asides,
    ...discography.singles.bsides,
    ...discography.singles.others
  ];

  return (
    <section id="discography" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-block">ผลงานเพลง</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Discography</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto ">
            ผลงานเพลงที่เบอร์รี่ได้มีส่วนร่วมใน Singles ของ BNK48
          </p>
        </motion.div>

        {/* Songs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allSongs.map((song, i) => {
            const Icon = typeIcons[song.type] || Music;
            const gradientClass = typeColors[song.type] || 'from-gray-500 to-gray-600';
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group relative overflow-hidden"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass}`} />
                
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${gradientClass} text-white`}>
                    {song.type}
                  </span>
                  <span className="text-gray-500 text-sm">{song.year}</span>
                </div>

                {/* Song Info */}
                <div className="flex items-start gap-4">
                  {song.image ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={song.image} 
                        alt={song.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white" size={20} />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-green-400 transition-colors">
                      {song.title}
                    </h3>
                    {song.titleTh && (
                      <p className="text-gray-400 text-sm mb-2">{song.titleTh}</p>
                    )}
                    <p className="text-gray-500 text-sm">
                      {song.single} {song.singleTh && `(${song.singleTh})`}
                    </p>
                  </div>
                </div>

                {/* Position Badge if A-Side */}
                {song.position && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <span className="flex items-center gap-2 text-sm text-yellow-400">
                      <Award size={16} />
                      {song.position}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32"
        >
          {/* Section Header - Same style as other sections */}
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-block">ความสำเร็จ</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              รางวัลและความสำเร็จของเบอร์รี่ในเส้นทาง BNK48
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discography.achievements.map((achievement, i) => {
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all border border-transparent hover:border-pink-500/20"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-pink-400 to-purple-400 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/10">
                  <Award className="text-white drop-shadow-md" size={32} />
                </div>
                <h4 className="font-bold mb-2 text-lg">{achievement.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                <span className="px-3 py-1 rounded-full bg-white/5 text-green-400 text-xs font-medium border border-white/10">
                  {achievement.year}
                </span>
              </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
