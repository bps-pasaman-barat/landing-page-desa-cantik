import { MapPin, Users, Activity } from 'lucide-react';
import type { Stat, Feature, ActivityItem, Testimonial, NavLink } from '../types';

export const statsData: Stat[] = [
  { label: 'Desa Terdata', value: '142+', icon: MapPin },
  { label: 'Peserta Aktif', value: '5,000+', icon: Users },
  { label: 'Kegiatan Selesai', value: '320+', icon: Activity },
];

export const featuresData: Feature[] = [
  { title: 'Tujuan Program', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Manfaat Program', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

export const activitiesData: ActivityItem[] = [
  { title: 'Pelatihan Kader Statistik', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800' },
  { title: 'Pendataan Potensi Desa', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.', img: 'https://images.unsplash.com/photo-1590086782957-93c06343e375?auto=format&fit=crop&q=80&w=800' },
  { title: 'Evaluasi Data Bulanan', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { title: 'Sosialisasi Literasi Data', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' },
  { title: 'Workshop Pemetaan Digital', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800' },
  { title: 'Pameran Data Inovatif', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800' },
];

export const galleryData: string[] = [
  'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
];

export const testimonialsData: Testimonial[] = [
  { name: 'Budi Santoso', role: 'Kepala Desa', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna.' },
  { name: 'Siti Aminah', role: 'Kader Statistik', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
  { name: 'Ahmad Fauzi', role: 'Tokoh Masyarakat', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.' },
];

export const navLinks: NavLink[] = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Kegiatan', href: '#kegiatan' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Statistik', href: '#statistik' },
];
