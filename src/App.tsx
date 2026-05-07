import { Navbar } from "@/components/navbar/Navbar"
import { Hero } from "@/components/hero/Hero"
import DaftarHadir from "@/components/daftar-hadir/DaftarHadir"
import { Gallery } from "@/components/gallery/Gallery"

import { Testimonials } from "@/components/testimonials/Testimonials"
import { Footer } from "@/components/footer/Footer"
import { FallingLeaf } from "@/components/parallax/FallingLeaf"
import { Materi } from "./components/materi/materi"
import { Qna } from "./components/qna/qna"

export function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />

      {/* Wrapper for Falling Leaves Parallax Layer */}
      <div className="relative z-0">
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          {[...Array(45)].map((_, i) => (
            <FallingLeaf key={i} />
          ))}
        </div>

        <Hero />
        < Materi/>
      <Qna />
        <DaftarHadir />
        <Gallery />
      </div>

      <Testimonials />

      <Footer />
    </div>
  )
}

export default App
