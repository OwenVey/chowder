import type { LucideIcon } from 'lucide-react';
import { CalendarDaysIcon, ShoppingCartIcon, UserCircleIcon, UtensilsCrossedIcon } from 'lucide-react';

export type NavigationItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  device: 'mobile' | 'desktop' | 'both';
};
export const navigation: Array<NavigationItem> = [
  { name: 'Recipes', href: '/', icon: UtensilsCrossedIcon, device: 'both' },
  { name: 'Plan', href: '/plan', icon: CalendarDaysIcon, device: 'both' },
  { name: 'Groceries', href: '/groceries', icon: ShoppingCartIcon, device: 'both' },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon, device: 'mobile' },
];
