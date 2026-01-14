import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Youtube, Music2, ExternalLink, Mail } from 'lucide-react';
import profile from '../data/profile.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden mt-24">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">Berry BNK48</h3>
                <p className="text-sm text-gray-500">Fan Website</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              เว็บไซต์แฟนเพจสำหรับเบอร์รี่ จิรภิญญา ฉันทวรรณกุล สมาชิก BNK48 Team NV รุ่นที่ 4
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-lg">🔗 ลิงก์ด่วน</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-pink-500/20 border border-slate-700 hover:border-pink-500/50 transition-all text-gray-400 hover:text-white text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                หน้าแรก
              </a>
              <a href="#about" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-pink-500/20 border border-slate-700 hover:border-pink-500/50 transition-all text-gray-400 hover:text-white text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                เกี่ยวกับ
              </a>
              <a href="#discography" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-pink-500/20 border border-slate-700 hover:border-pink-500/50 transition-all text-gray-400 hover:text-white text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                ผลงาน
              </a>
              <a href="#timeline" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-pink-500/20 border border-slate-700 hover:border-pink-500/50 transition-all text-gray-400 hover:text-white text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                ไทม์ไลน์
              </a>
              <a href="#gallery" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-pink-500/20 border border-slate-700 hover:border-pink-500/50 transition-all text-gray-400 hover:text-white text-sm col-span-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                แกลเลอรี
              </a>
            </div>
          </motion.div>

          {/* Social & Official Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-lg">💖 ติดตาม Berry</h4>
            <div className="flex gap-3 mb-6 relative z-10">
              <a
                href="https://www.instagram.com/berry.bnk48official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-500 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/berry.bnk48official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@berry.bnk48official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-black flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 text-gray-400 hover:text-white"
                aria-label="TikTok"
              >
                <Music2 size={18} />
              </a>
              <a
                href="https://www.youtube.com/@BNK48"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 text-gray-400 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>

            <h4 className="font-bold mb-3">เว็บไซต์ทางการ</h4>
            <a
              href="https://www.bnk48.com/index.php?page=home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-pink-400 text-sm transition-colors"
            >
              <ExternalLink size={14} />
              BNK48 Official
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white-500 text-sm text-center md:text-left">
            © {currentYear} Berry BNK48 Fan Website. Made with{' '}
            <Heart className="inline w-4 h-4 text-pink-500 fill-pink-500" /> by RafaCielChai Fan.
          </p>
          <p className="text-white-600 text-xs text-center md:text-right">
            This is an unofficial fan-made website. All content belongs to BNK48 Office.
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-lime-400/5 rounded-full blur-3xl" />
    </footer>
  );
}
