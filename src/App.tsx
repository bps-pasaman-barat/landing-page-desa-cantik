import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Activities } from '@/components/activities/Activities';
import { Gallery } from '@/components/gallery/Gallery';
import { Stats } from '@/components/stats/Stats';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { CTA } from '@/components/cta/CTA';
import { Footer } from '@/components/footer/Footer';
import { FallingLeaf } from '@/components/parallax/FallingLeaf';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* Wrapper for Falling Leaves Parallax Layer */}
      <div className="relative z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[...Array(45)].map((_, i) => (
            <FallingLeaf key={i} index={i} />
          ))}
        </div>

        <Hero />
        <About />
        <Activities />
        <Gallery />
      </div>

      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
