import type { MateriItem } from "@/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MateriCardProps {
  materi: MateriItem
  onOpen: (materi: MateriItem) => void
}

export const MateriCard = ({ materi, onOpen }: MateriCardProps) => {
  return (
    <Card
      className="
        group
        relative
        w-[85vw]
        sm:w-[320px]
        md:w-[360px]
        lg:w-[400px]
        h-[500px]
        sm:h-[620px]
        lg:h-[720px]
        shrink-0
        snap-center
        overflow-hidden
        rounded-[2rem]
        border-none
        shadow-xl
        transition-all
        duration-500
        flex
        flex-col
      "
    >
      {/* IMAGE */}
      <CardHeader className="p-0 relative h-[45%] shrink-0 overflow-hidden">
        <img
          src={materi.imageUrl}
          alt={materi.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
          "
        />
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
            {materi.id}
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-slate-900 line-clamp-1">
            {materi.title}
          </h4>
        </div>

        <p className="line-clamp-3 text-base sm:text-lg leading-relaxed text-slate-600">
          {materi.description}
        </p>
      </CardContent>

      <CardFooter className="p-6 sm:p-8 pt-0 mt-auto">
        <Button
          onClick={() => onOpen(materi)}
          className="w-full h-12 rounded-xl bg-orange-600 font-semibold text-white transition-all hover:bg-orange-700 hover:shadow-lg active:scale-95"
        >
          Selengkapnya
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Button>
      </CardFooter>
    </Card>
  )
}
