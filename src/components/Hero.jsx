import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Music2, ExternalLink } from 'lucide-react';
import profile from '../data/profile.json';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0f172a] to-[#0f172a]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-pink-400 to-purple-400 blur-2xl opacity-40 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 glow">
                <img 
                  src="/images/profile.jpg" 
                  alt="Berry BNK48" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center absolute inset-0 -z-10">
                  <span className="text-8xl md:text-9xl font-bold text-white/10">B</span>
                </div>
              </div>
              
              {/* Team Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 badge text-sm px-4 py-2"
              >
                {profile.team}
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Generation Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-4"
            >
              <span className="badge">{profile.generation}</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              <span className="gradient-text">{profile.name.nickname}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-2">
              {profile.name.nicknameEn}
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              {profile.name.th}
            </p>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
                <div className="w-3 h-3 rounded-full" style={{ background: profile.lightstickColors[0] }} />
                <div className="w-3 h-3 rounded-full" style={{ background: profile.lightstickColors[1] }} />
                <span className="text-sm text-gray-400">Lightstick Color</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-400">
                📍 {profile.birthplace.th}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={profile.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href={profile.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.bnk48.com/?page=listMembers&memberId=98"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@berry.bnk48official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center transition-all hover:scale-110"
                title="TikTok"
              >
                <Music2 size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-pink-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
