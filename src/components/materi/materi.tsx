"use client"

import { PDFViewer } from "../PDFViewer"

export const Materi = () => {
  return (
    <section
      id="materi"
      className="bg-slate-50 py-24 w-[90vw] mx-auto flex flex-col items-center gap-8"
    >
      <div className="w-full max-w-5xl text-center px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Materi</h2>
        
        {/* PDF Viewer Component */}
        <div className="w-full mb-6 text-left">
          <PDFViewer url="/materi.pdf" />
        </div>
      </div>
    </section>
  )
}