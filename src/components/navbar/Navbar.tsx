import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/data"
import { useScrollState } from "@/hooks/useScrollState"
import { scrollTo } from "@/utils/scrollTo"
import { Drawer, DrawerContent } from "@/components/ui/drawer"

export const Navbar = () => {
  const isScrolled = useScrollState(50)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/90 py-4 shadow-sm backdrop-blur-md" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => scrollTo("#hero")}
          >
            <img
              src="/bps.png"
              alt="Logo BPS"
              className="h-8 w-8 object-contain"
            />
            <span
              className={`text-xl font-bold tracking-tight ${isScrolled ? "text-slate-900" : "text-slate-200 md:text-white"}`}
            >
              BPS Kab Pasaman Barat
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`font-medium transition-colors hover:text-emerald-500 ${isScrolled ? "text-slate-600" : "text-slate-100"}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={
                  isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"
                }
              />
            ) : (
              <Menu
                className={
                  isScrolled ? "text-slate-900" : "text-gray-200 md:text-white"
                }
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DrawerContent className="md:hidden">
          <div className="flex flex-col gap-6 p-6 pb-12">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  scrollTo(link.href, () => setIsMobileMenuOpen(false))
                }
                className="text-left text-2xl font-bold text-slate-800"
              >
                {link.name}
              </button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
