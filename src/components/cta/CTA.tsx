import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
      <section id="cta" className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&q=80&w=2000" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-lg border border-white/10 p-12 md:p-20 rounded-3xl shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Lorem Dr Sit Amet
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel massa in ex convallis elementum. Fusce dignissim tincidunt justo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-lg h-auto">
                Pelajari Lebih Lanjut
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg h-auto">
                Hubungi Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
