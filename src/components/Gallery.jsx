import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Gallery images - using placeholder descriptions
const galleryImages = [
  {
    id: 1,
    title: 'Profile Photo',
    description: 'ภาพโปรไฟล์อย่างเป็นทางการ',
    category: 'official',
    src: '/images/gallery-1.jpg'
  },
  {
    id: 2,
    title: 'Stage Performance',
    description: 'การแสดงบนเวที BNK48 Theater',
    category: 'performance',
    src: '/images/gallery-2.jpg'
  },
  {
    id: 3,
    title: 'Handshake Event',
    description: 'งาน Handshake Event',
    category: 'event',
    src: '/images/gallery-3.jpg'
  },
  {
    id: 4,
    title: 'Team NV',
    description: 'กับสมาชิก Team NV',
    category: 'team',
    src: '/images/gallery-4.jpg'
  },
  {
    id: 5,
    title: 'Music Video',
    description: 'เบื้องหลัง MV',
    category: 'behind',
    src: '/images/gallery-5.jpg'
  },
  {
    id: 6,
    title: 'Senbatsu',
    description: 'รูปกับสมาชิก Senbatsu',
    category: 'official',
    src: '/images/gallery-6.jpg'
  }
];

const categories = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'official', label: 'ภาพทางการ' },
  { id: 'performance', label: 'การแสดง' },
  { id: 'event', label: 'งานอีเวนต์' },
  { id: 'team', label: 'ทีม' },
  { id: 'behind', label: 'เบื้องหลัง' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="badge mb-4 inline-block">รูปภาพ</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            รวมภาพต่างๆ ของเบอร์รี่จากกิจกรรมและการแสดง
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-green-400 via-pink-400 to-purple-400 text-white font-bold shadow-lg shadow-pink-500/20'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Placeholder */}
                <div className="hidden w-full h-full absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center -z-10">
                  <span className="text-6xl font-bold bg-gradient-to-br from-green-400 via-pink-400 to-purple-400 bg-clip-text text-transparent opacity-30">B</span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 rounded-2xl transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.facebook.com/bnk48official.berry/photos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            ดูเพิ่มเติมบน Facebook
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:text-green-400 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 p-3 rounded-full bg-gray-800/80 text-white hover:bg-green-500 transition-all"
              >
                <ChevronLeft size={28} />
              </button>
            )}
            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 p-3 rounded-full bg-gray-800/80 text-white hover:bg-green-500 transition-all"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full mx-4"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-900 relative flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full absolute inset-0 bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center">
                  <span className="text-9xl text-green-400/30">B</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-gray-400">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
