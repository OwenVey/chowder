'use client';

import { cn } from '@/lib/utils';
import { CalendarDaysIcon, HomeIcon, ShoppingCartIcon, UserCircleIcon, UtensilsCrossedIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Recipes', href: '/recipes', icon: UtensilsCrossedIcon },
  // { name: 'Search', href: '/search', icon: SearchIcon },
  { name: 'Plan', href: '/plan', icon: CalendarDaysIcon },
  { name: 'Groceries', href: '/groceries', icon: ShoppingCartIcon },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center gap-x-6 border-t bg-background px-6 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 lg:hidden">
      <ul role="list" className="flex w-full items-center justify-between">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                'group flex flex-col items-center rounded-lg text-sm leading-6',
                item.href === pathname ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              <span className="font-medium">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
