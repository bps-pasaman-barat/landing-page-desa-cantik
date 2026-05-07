import { MapPin } from 'lucide-react';
import { navLinks } from '@/data';
import { scrollTo } from '@/utils/scrollTo';

export const Footer = () => {
  return (
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/bps.png" alt="Logo" className="w-10 h-10 object-contain" />
                <span className="font-bold text-2xl tracking-tight text-white">BPS Pasaman Barat</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <div className="text-slate-300 font-medium">
                Badan Pusat Statistik (BPS)<br />
                Kabupaten Pasaman Barat
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Tautan Cepat</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <button onClick={() => scrollTo(link.href)} className="text-slate-400 hover:text-orange-400 transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Kontak</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span>Jl. Jendral Sudirman No. 123, Pasaman Barat, Sumatera Barat</span>
                </li>
                <li>Email: bps1312@bps.go.id</li>
                <li>Telp: (0753) 123456</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} BPS Kabupaten Pasaman Barat. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
  );
};
