import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { activitiesData } from '@/data';

export const Activities = () => {
  return (
      <section id="kegiatan" className="py-24 relative">
        <div className="absolute inset-0 bg-slate-50 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Program Kami</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Kegiatan Utama Desa Cinta Statistik</h3>
            <p className="text-slate-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nisl dignissim, laoreet nisi in, volutpat felis.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activitiesData.map((activity, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden h-56 shrink-0">
                    <img 
                      src={activity.img} 
                      alt={activity.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{activity.title}</h4>
                    <p className="text-slate-600 mb-4 flex-grow">{activity.desc}</p>
                    <div className="flex items-center text-emerald-600 font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Lihat Detail <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};
