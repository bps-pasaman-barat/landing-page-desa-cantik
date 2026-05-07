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
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400/png",
]

export const testimonialsData: Testimonial[] = [
  {
    name: "John Doe",
    role: "peran",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna.",
  },
  {
    name: "John Doe",
    role: "peran",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    name: "John Doe",
    role: "peran",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
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
