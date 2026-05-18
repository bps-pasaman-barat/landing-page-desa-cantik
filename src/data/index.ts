import { Link2, Link, Link2Icon } from "lucide-react"
import type {
  Stat,
  Feature,

  Testimonial,
  NavLink,
  MateriItem,
} from "../types"

export const statsData: Stat[] = [
  { label: "Link QNA", value: "JUDUL", icon: Link2 },
  { label: "Link QNA", value: "JUDUL", icon: Link },
  { label: "LINK QNA", value: "JUDUL", icon: Link2Icon },
]

export const featuresData: Feature[] = [
  {
    title: "Tujuan Program",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Manfaat Program",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]



export const galleryData: string[] = [
  "/galery/absensi-1.png",
  "/galery/penyerahan-seritfikat.png",
  "/galery/random-10.png",
  "/galery/random-2.png",
  "/galery/random-3.png",
  "/galery/random-4.png",
  "/galery/random-5.png",
  "/galery/random-6.png",
  "/galery/random-9.png",
  "/galery/random-11.png",
  "/galery/random-12.png",
  "/galery/random.png",
]

export const testimonialsData: Testimonial[] = [
  {
    name: "H. Yulianto, SH.M,M",
    role: "Bupati Pasaman Barat",
    text: "",
  },
  {
    name: "Kanma",
    role: "Camat Luhak Nanduo",
    text: "",
  },
  {
    name: "Johny Hendri",
    role: "Bappelit Bangda",
    text: "",
  },
]

export const navLinks: NavLink[] = [
  { name: "Beranda", href: "#hero" },
  { name: "Materi", href: "#materi" },
  { name: "Qna", href: "#qna" },
  { name: "Daftar Hadir", href: "#daftar-hadir" },
  { name: "Galeri Dokumentasi", href: "#galeri-dokumentasi" },
]

export const materiList: MateriItem[] = [
  {
    id: 1,
    title: "Materi 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://placehold.co/600x400/png",
  },
  {
    id: 2,
    title: "Materi 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://placehold.co/600x400/png",
  },
  {
    id: 3,
    title: "Materi 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://placehold.co/600x400/png",
  },
  {
    id: 4,
    title: "Materi 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://placehold.co/600x400/png",
  },
  {
    id: 5,
    title: "Materi 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://placehold.co/600x400/png",
  },
]
