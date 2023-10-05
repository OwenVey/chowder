'use client';

import type { NavigationItem } from '@/constants';
import { navigation } from '@/constants';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();
  const setIsGlobalSearchOpen = useStore((state) => state.setIsGlobalSearchOpen);

  const navItems = navigation.filter(({ device }) => device !== 'desktop');

  // Split the items into two equal parts
  const halfwayThrough = Math.ceil(navItems.length / 2);
  const firstHalfItems = navItems.slice(0, halfwayThrough);
  const secondHalfItems = navItems.slice(halfwayThrough);

  const renderNavItem = (item: NavigationItem) => (
    <li key={item.name} className="flex-1">
      <Link
        href={item.href}
        className={cn(
          'grid place-items-center rounded-lg text-sm',
          pathname.startsWith(item.href) ? 'text-primary' : 'text-muted-foreground',
        )}
      >
        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="mt-1 text-xs font-medium">{item.name}</span>
      </Link>
    </li>
  );

  return (
    <nav className="flex w-full items-center gap-x-6 border-t bg-background pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 lg:hidden">
      <ul role="list" className="flex w-full">
        {firstHalfItems.map(renderNavItem)}

        <li className="flex flex-1 justify-center">
          <button
            onClick={() => setIsGlobalSearchOpen(true)}
            className="grid place-items-center rounded-lg text-sm text-muted-foreground"
          >
            <SearchIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span className="mt-1 text-xs font-medium">Search</span>
          </button>
        </li>

        {secondHalfItems.map(renderNavItem)}
      </ul>
    </nav>
  );
}
