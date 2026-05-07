import { BarChart3, CheckCircle2 } from "lucide-react"
import { featuresData } from "@/data"

export const Materi = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Static */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=2000"
          alt="Ocean"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* TEXT */}
          <div>
            <h2 className="mb-2 text-sm font-bold tracking-wider text-emerald-600 uppercase">
              Materi
            </h2>

            <h3 className="mb-6 text-4xl font-extrabold text-slate-900">
              LOREM IPSUM DOLOR SIT AMET
            </h3>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="space-y-6">
              {featuresData.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xl font-bold text-slate-900">
                      {feature.title}
                    </h4>

                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://placehold.co/600x400/000000/FFFFFF/png"
              alt="Materi"
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-10 -left-10 -z-0 h-full w-full rounded-3xl border-4 border-emerald-500/20" />

            <div className="absolute top-1/4 -right-8 z-20 hidden rounded-2xl bg-white p-6 shadow-xl md:block">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <BarChart3 className="h-8 w-8" />
                </div>

                <div>
                  <div className="text-3xl font-black text-slate-900">
                    100%
                  </div>

                  <div className="text-sm text-slate-500">
                    Akurasi Data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}