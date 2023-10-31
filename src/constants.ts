import type { LucideIcon } from 'lucide-react';
import { CalendarDaysIcon, HomeIcon, ShoppingCartIcon, UserCircleIcon, UtensilsCrossedIcon } from 'lucide-react';

export type NavigationItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  device: 'mobile' | 'desktop' | 'both';
};
export const navigation: Array<NavigationItem> = [
  { name: 'Home', href: '/', icon: HomeIcon, device: 'both' },
  { name: 'Recipes', href: '/recipes', icon: UtensilsCrossedIcon, device: 'both' },
  { name: 'Plan', href: '/plan', icon: CalendarDaysIcon, device: 'both' },
  { name: 'Groceries', href: '/groceries', icon: ShoppingCartIcon, device: 'both' },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon, device: 'mobile' },
];
