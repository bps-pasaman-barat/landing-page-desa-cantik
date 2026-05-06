import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { galleryData } from '@/data';

export const Gallery = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
      <section id="galeri" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white z-0" />
        {/* Ocean Parallax Background */}
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=2000" 
            alt="Ocean Parallax" 
            className="w-full h-[150%] object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Dokumentasi</h2>
              <h3 className="text-4xl font-extrabold text-slate-900">Galeri Kegiatan</h3>
            </div>
            <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 hidden md:flex items-center">
              Lihat Semua Foto <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryData.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Galeri ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                    <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-6 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 md:hidden flex items-center justify-center">
            Lihat Semua Foto <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
  );
};
