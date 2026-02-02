import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  name: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  colSpan?: string; // Tailwind class for grid span
}

export type PortfolioCategory = 'All' | 'Branding' | 'Marketing' | 'Photography' | 'Print';

export interface Project {
  id: number;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  size?: 'normal' | 'large' | 'tall'; // For Masonry layout
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}