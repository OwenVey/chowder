'use client';

import { cn } from '@/lib/utils';
import { CalendarDaysIcon, SearchIcon, ShoppingBasketIcon, SoupIcon, UtensilsCrossedIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Recipes', href: '/', icon: UtensilsCrossedIcon },
  { name: 'Search', href: '/search', icon: SearchIcon },
  { name: 'Planner', href: '/planner', icon: CalendarDaysIcon },
  { name: 'Groceries', href: '/groceries', icon: ShoppingBasketIcon },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'z-50 bg-background', // shared
        'fixed bottom-0 flex w-full items-center gap-x-6 border-t px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 shadow-sm', // mobile
        'lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-20 lg:overflow-y-auto lg:border-r lg:pb-4', // desktop
      )}
    >
      {/* Logo (only on desktop) */}
      <div className="mb-8 hidden h-16 shrink-0 items-center justify-center lg:flex">
        <SoupIcon className="h-8 w-8 text-primary" />
      </div>
      <nav className="w-full">
        <ul role="list" className="flex flex-row items-center justify-between lg:flex-col lg:gap-3">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  item.href === pathname
                    ? 'text-primary lg:bg-primary lg:text-primary-foreground lg:text-white'
                    : 'text-muted-foreground lg:hover:bg-muted',
                  'group flex flex-col items-center rounded-lg px-3 text-sm leading-6 lg:py-3',
                )}
              >
                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="lg:sr-only">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
