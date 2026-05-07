import { motion, useScroll, useTransform } from "framer-motion"
import { galleryData } from "@/data"

export const Gallery = () => {
  const { scrollY } = useScroll()
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <section id="galeri-dokumentasi" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-white" />
      {/* Ocean Parallax Background */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=2000"
          alt="Ocean Parallax"
          className="h-[150%] w-full object-cover"
        />
      </motion.div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-12 flex flex-col items-center justify-between md:flex-row md:items-end">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="mb-2 text-sm font-bold tracking-wider text-emerald-600 uppercase">
              Dokumentasi
            </h2>

            <h3 className="text-4xl font-extrabold text-slate-900">
              Galeri Kegiatan
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryData.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt={`Galeri ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
