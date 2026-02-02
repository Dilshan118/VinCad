import { 
  Palette, 
  Megaphone, 
  Camera, 
  BookOpen, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail,
  Layers,
  PenTool,
  Image as ImageIcon,
  Monitor
} from 'lucide-react';
import { ServiceCategory, Project, PortfolioCategory, SocialLink } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Brand Identity",
    description: "Crafting distinct visual personalities that resonate.",
    icon: Palette,
    colSpan: "md:col-span-2 lg:col-span-2",
    items: [
      "Logo Design",
      "Business Card Design",
      "Stationery Design",
      "Letterhead Design",
      "Label Design"
    ]
  },
  {
    title: "Marketing & Ads",
    description: "Strategic visuals designed to convert and captivate.",
    icon: Megaphone,
    colSpan: "md:col-span-1 lg:col-span-1",
    items: [
      "Social Media Poster",
      "Banner Design",
      "Flyer Design",
      "Billboard Design",
      "Brochure Design"
    ]
  },
  {
    title: "Editorial & Print",
    description: "Tactile designs for physical and digital publishing.",
    icon: BookOpen,
    colSpan: "md:col-span-1 lg:col-span-1",
    items: [
      "Menu Design",
      "Book Cover Design",
      "Invitation Design",
      "Movie Poster Design"
    ]
  },
  {
    title: "Photography & Editing",
    description: "High-end retouching and product visualization.",
    icon: Camera,
    colSpan: "md:col-span-2 lg:col-span-2",
    items: [
      "Product Photography",
      "Wedding Photo Editing",
      "Photo Editing"
    ]
  }
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = ['All', 'Branding', 'Marketing', 'Photography', 'Print'];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Luxe Cosmetics",
    category: "Branding",
    imageUrl: "https://picsum.photos/800/800?random=1",
    size: "large"
  },
  {
    id: 2,
    title: "Urban Coffee Menu",
    category: "Print",
    imageUrl: "https://picsum.photos/600/800?random=2",
    size: "tall"
  },
  {
    id: 3,
    title: "Neon Nights Poster",
    category: "Marketing",
    imageUrl: "https://picsum.photos/800/600?random=3",
    size: "normal"
  },
  {
    id: 4,
    title: "Minimalist Watch",
    category: "Photography",
    imageUrl: "https://picsum.photos/800/800?random=4",
    size: "normal"
  },
  {
    id: 5,
    title: "Tech Summit 2024",
    category: "Branding",
    imageUrl: "https://picsum.photos/800/600?random=5",
    size: "large"
  },
  {
    id: 6,
    title: "Wedding Retouch",
    category: "Photography",
    imageUrl: "https://picsum.photos/600/800?random=6",
    size: "tall"
  },
  {
    id: 7,
    title: "Eco Juice Label",
    category: "Branding",
    imageUrl: "https://picsum.photos/600/600?random=7",
    size: "normal"
  },
  {
    id: 8,
    title: "Summer Sale Campaign",
    category: "Marketing",
    imageUrl: "https://picsum.photos/800/500?random=8",
    size: "normal"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", url: "#", icon: Instagram },
  { platform: "LinkedIn", url: "#", icon: Linkedin },
  { platform: "Twitter", url: "#", icon: Twitter },
  { platform: "Email", url: "mailto:hello@vincad.design", icon: Mail },
];

export const FEATURES = [
  {
    title: "Precision Oriented",
    description: "Every pixel serves a purpose. We obsess over the details so you don't have to.",
    icon: Layers
  },
  {
    title: "Rapid Turnaround",
    description: "Creative velocity meets quality. We deliver exceptional work on your timeline.",
    icon: Monitor
  },
  {
    title: "Holistic Approach",
    description: "We don't just design logos; we build cohesive visual ecosystems for brands.",
    icon: PenTool
  }
];