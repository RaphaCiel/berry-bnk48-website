import { motion } from 'framer-motion';
import { Heart, Music, Tv, Sparkles } from 'lucide-react';
import profile from '../data/profile.json';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-block">เกี่ยวกับ</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            รู้จัก <span className="gradient-text">เบอร์รี่</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            สมาชิก BNK48 รุ่นที่ 4 สังกัด Team NV ที่น่ารักและมีเสน่ห์
          </p>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Likes Card */}
          <motion.div variants={itemVariants} className="card group">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="text-pink-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">สิ่งที่ชอบ</h3>
            <ul className="space-y-2">
              {profile.likes.th.map((like, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {like}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div variants={itemVariants} className="card group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">งานอดิเรก</h3>
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.th.map((hobby, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-gray-300">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Facts Card */}
          <motion.div variants={itemVariants} className="card group md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Tv className="text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">เกร็ดน่ารู้</h3>
            <ul className="space-y-3">
              {profile.facts.map((fact, i) => (
                <li key={i} className="text-gray-300 flex items-start gap-2">
                  <span className="text-pink-400 mt-1">✦</span>
                  {fact.th}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Election Results */}
          <motion.div variants={itemVariants} className="card group lg:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Music className="text-indigo-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Senbatsu Election</h3>
            <div className="grid grid-cols-2 gap-4">
              {profile.elections.map((election, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-pink-500/30 transition-colors">
                  <div className="text-3xl font-bold gradient-text mb-1">#{election.rank}</div>
                  <div className="text-sm text-gray-300">{election.name}</div>
                  <div className="text-xs text-gray-500">{election.year}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lightstick Colors */}
          <motion.div variants={itemVariants} className="card group">
            <h3 className="text-xl font-bold mb-4">สีไฟแท่ง</h3>
            <div className="flex gap-4 items-center">
              {profile.lightstickColors.map((color, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-full shadow-lg border-2 border-white/5"
                    style={{ background: color, boxShadow: `0 0 30px ${color}40` }}
                  />
                  <span className="text-sm text-gray-400">{profile.lightstickColorNames.th[i]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
