import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { testimonialsData } from '@/data';

export const Testimonials = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Parallax Background detail */}
        <motion.div style={{ y: y1 }} className="absolute -right-10 top-20 text-slate-200 z-0">
          <Quote className="w-64 h-64 opacity-50" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Dampak Program</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Apa Kata Mereka?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Card className="h-full border-0 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-8 relative">
                    <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-6" />
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                        <div className="text-emerald-600 text-sm font-medium">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};
