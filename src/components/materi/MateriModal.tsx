import type { MateriItem } from "@/types"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface MateriModalProps {
  materi: MateriItem
}

export const MateriModal = ({ materi }: MateriModalProps) => {
  return (
    <DialogContent className="sm:max-w-6xl w-[95vw] p-0 overflow-hidden border-none bg-white rounded-[2rem] [&>button]:bg-black/30 [&>button]:text-white [&>button]:border-none hover:[&>button]:bg-black/60 [&>button]:rounded-full [&>button]:p-2 [&>button]:w-10 [&>button]:h-10 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:right-4 [&>button]:top-4">
      {/* Hidden header for accessibility */}
      <DialogHeader className="sr-only">
        <DialogTitle>{materi.title}</DialogTitle>
        <DialogDescription>{materi.description}</DialogDescription>
      </DialogHeader>

      <div className="flex max-h-[85vh] flex-col overflow-y-auto">
        {/* IMAGE HERO */}
        <div className="relative h-64 sm:h-96 w-full shrink-0">
          <img
            src={materi.imageUrl}
            alt={materi.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 sm:p-12">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 font-bold text-white shadow-lg">
              {materi.id}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white drop-shadow-md">
              {materi.title}
            </h2>
          </div>
        </div>

        {/* DETAILS */}
        <div className="p-8 sm:p-12 text-slate-700">
          <div className="prose prose-lg max-w-none prose-emerald">
            <p className="text-xl font-medium leading-relaxed text-slate-800">
              {materi.description}
            </p>
            
            <div className="mt-8 space-y-6 text-base text-slate-600">
              <p>
                Materi ini adalah bagian dari program pembinaan Desa Cantik (Desa Cinta Statistik) yang bertujuan 
                untuk meningkatkan literasi statistik dan pengelolaan data di tingkat desa.
              </p>
              <p>
                Penjelasan selengkapnya mengenai topik <strong>{materi.title}</strong> 
             
              </p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
