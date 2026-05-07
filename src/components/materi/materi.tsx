"use client"

import { useRef, useState } from "react"
import { materiList } from "@/data"

import { MateriCard } from "./MateriCard"
import { MateriModal } from "./MateriModal"
import type { MateriItem } from "@/types"

import { Dialog } from "@/components/ui/dialog"

export const Materi = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [selectedMateri, setSelectedMateri] = useState<MateriItem | null>(null)

  return (
    <section
      id="materi"
      className="bg-slate-50 py-24 w-[90vw] mx-auto"
    >
      {/* HEADER */}
      <div className="mx-auto mb-16 max-w-4xl px-6 text-center">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
          Materi
        </h2>

        <h3 className="mb-6 text-5xl font-black text-slate-900">
          Jelajahi Materi 
        </h3>

        <p className="text-lg leading-relaxed text-slate-600">
          Geser untuk melihat materi lainnya.
        </p>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div
        ref={scrollRef}
        className="
          flex
          gap-8
          overflow-x-auto
          scroll-smooth
          px-8
          pb-6
          snap-x
          snap-mandatory
          scrollbar-hide
        "
      >
        {materiList.map((materi) => (
          <MateriCard 
            key={materi.id} 
            materi={materi} 
            onOpen={setSelectedMateri} 
          />
        ))}
      </div>

      {/* POPUP MODAL */}
      <Dialog open={!!selectedMateri} onOpenChange={(open) => { if (!open) setSelectedMateri(null) }}>
        {selectedMateri && <MateriModal materi={selectedMateri} />}
      </Dialog>
    </section>
  )
}