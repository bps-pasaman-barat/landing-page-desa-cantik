"use client"

export const Materi = () => {
  return (
    <section
      id="materi"
      className="mx-auto flex w-[90vw] flex-col items-center gap-8 bg-slate-50 py-24"
    >
      <div className="w-full max-w-5xl px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-slate-800">Materi</h2>

        <div className="flex h-screen w-full items-center justify-center bg-gray-100">
          <div className="h-[90vh] w-full max-w-5xl shadow-lg">
            <iframe src="/materi.pdf" className="h-full w-full border-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
