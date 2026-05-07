import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { scrollTo } from '@/utils/scrollTo';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0" />
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/50 to-slate-900/70" />
        </div>
        
        {/* Parallax Decorations */}
        <motion.div style={{ y: y1 }} className="absolute -top-20 -left-20 opacity-10 z-0">
          <img src="/logo.png" alt="Logo Decoration" className="w-96 h-96 object-contain transform -rotate-12" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-20 -right-20 opacity-10 z-0">
          <img src="/logo.png" alt="Logo Decoration" className="w-[30rem] h-[30rem] object-contain transform rotate-12" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-orange-500/20 backdrop-blur-md border border-orange-400/30 rounded-full px-4 py-2 mb-6 text-orange-300 font-medium text-sm">
              BPS Kabupaten Pasaman Barat
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
             LOREM <span className="text-orange-400">IPSUM</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
             Pencanangan Desa Cinta Statistik, Pembinaan Statistik Sektoral, Standar Pelayanan Publik dan Keterbukaan Informasi Publik
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-full px-8 py-6 text-lg backdrop-blur-sm" onClick={() => scrollTo('#qna')}>
                Lihat Qna
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-orange-500/30" onClick={() => scrollTo('#galeri-dokumentasi')}>
                Lihat Galeri
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
