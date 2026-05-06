import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { LucideProps } from 'lucide-react';

export interface Stat {
  label: string;
  value: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export interface Feature {
  title: string;
  description: string;
}

export interface ActivityItem {
  title: string;
  desc: string;
  img: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface NavLink {
  name: string;
  href: string;
}
