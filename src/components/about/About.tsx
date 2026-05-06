import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, CheckCircle2 } from 'lucide-react';
import { featuresData } from '@/data';

export const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
      <section id="tentang" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white z-0" />
        {/* Ocean Parallax Background */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=2000" 
            alt="Ocean Parallax" 
            className="w-full h-[150%] object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Tentang Program</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Mewujudkan Masyarakat Sadar Data di Tingkat Desa
              </h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>
              
              <div className="space-y-6">
                {featuresData.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                alt="Tentang Desa Cinta Statistik" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-4 border-emerald-500/20 rounded-3xl -z-0"></div>
              
              {/* Floating Badge */}
              <div className="absolute -right-8 top-1/4 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900">100%</div>
                    <div className="text-sm font-medium text-slate-500">Akurasi Data</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};
