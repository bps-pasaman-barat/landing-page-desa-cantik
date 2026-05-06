import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '@/data';

export const Stats = () => {
  return (
      <section id="statistik" className="py-20 relative bg-emerald-600 overflow-hidden">
        <div className="absolute inset-0">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {statsData.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-emerald-100 font-medium text-lg">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
  );
};
