import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { navLinks } from '@/data';
import { useScrollState } from '@/hooks/useScrollState';
import { scrollTo } from '@/utils/scrollTo';

export const Navbar = () => {
  const isScrolled = useScrollState(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('#hero')}>
            <img src="/logo.png" alt="Logo Desa Cinta Statistik" className="w-8 h-8 object-contain" />
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>Desa Cinta Statistik</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollTo(link.href)}
                className={`font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
              >
                {link.name}
              </button>
            ))}
          
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollTo(link.href, () => setIsMobileMenuOpen(false))}
                className="text-left text-2xl font-bold text-slate-800"
              >
                {link.name}
              </button>
            ))}
          
          </div>
        </div>
      )}
    </>
  );
};
