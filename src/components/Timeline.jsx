import { motion } from 'framer-motion';
import { Star, Music, Calendar, Award, TrendingUp, Trophy, Hand } from 'lucide-react';
import timelineData from '../data/timeline.json';

const iconMap = {
  star: Star,
  music: Music,
  calendar: Calendar,
  award: Award,
  'trending-up': TrendingUp,
  trophy: Trophy,
  hand: Hand
};

const typeColors = {
  milestone: 'from-yellow-400 to-orange-500',
  performance: 'from-pink-500 to-rose-500',
  event: 'from-blue-400 to-cyan-500',
  competition: 'from-purple-500 to-indigo-500',
  election: 'from-green-400 to-emerald-500'
};

export default function Timeline() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear() + 543}`;
  };

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-block">เส้นทาง</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            เส้นทางการเติบโตของเบอร์รี่ใน BNK48 ตั้งแต่เริ่มต้นจนถึงปัจจุบัน
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Left on mobile, Center on desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-500/30 to-transparent md:-translate-x-1/2" />

          {timelineData.map((item, i) => {
            const Icon = iconMap[item.icon] || Star;
            const gradientClass = typeColors[item.type] || 'from-gray-500 to-gray-600';
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Mobile: Space for line / Desktop: Left Content */}
                <div className={`hidden md:block md:w-5/12 ${isLeft ? 'text-right pr-12' : 'pl-12'}`}>
                  {isLeft && (
                    <div className="card hover:border-pink-500/30 transition-colors inline-block text-right w-full">
                      <span className="text-sm text-green-400 font-medium block mb-1">
                        {formatDate(item.date)}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title.th}</h3>
                      <p className="text-gray-300 text-sm">{item.description.th}</p>
                    </div>
                  )}
                </div>

                {/* Center Icon - Shared */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg border-4 border-slate-900 group`}>
                    <Icon className="text-white group-hover:scale-110 transition-transform" size={20} />
                  </div>
                </div>

                {/* Mobile Content (Always Right) */}
                <div className="md:hidden pl-20 pr-4 w-full text-left">
                  <div className="card hover:border-pink-500/30 transition-colors w-full">
                    <span className="text-sm text-green-400 font-medium block mb-1">
                      {formatDate(item.date)}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{item.title.th}</h3>
                    <p className="text-gray-300 text-sm">{item.description.th}</p>
                  </div>
                </div>

                {/* Desktop: Right Content */}
                <div className={`hidden md:block md:w-5/12 ${!isLeft ? 'text-left pl-12' : 'pr-12'}`}>
                  {!isLeft && (
                    <div className="card hover:border-pink-500/30 transition-colors inline-block text-left w-full">
                      <span className="text-sm text-green-400 font-medium block mb-1">
                        {formatDate(item.date)}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title.th}</h3>
                      <p className="text-gray-300 text-sm">{item.description.th}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Timeline End - Centered on desktop, aligned left on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-start md:justify-center pl-3 md:pl-0"
          >
             <div className="relative left-0 md:left-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 via-pink-400 to-purple-400 flex items-center justify-center glow-berry border-4 border-slate-900 z-10">
              <span className="text-2xl">🌟</span>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-6 text-gray-400 pl-16 md:pl-0"
          >
            และการเดินทางยังคงดำเนินต่อไป...
          </motion.p>
        </div>
      </div>
    </section>
  );
}
