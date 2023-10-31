'use client';

import { navigation } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();
  const navItems = navigation.filter(({ device }) => device !== 'desktop');

  return (
    <nav className="flex w-full items-center gap-x-6 border-t bg-background pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 lg:hidden">
      <ul role="list" className="flex w-full">
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);

          return (
            <li key={item.name} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  'grid place-items-center rounded-lg text-sm',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="mt-1 text-xs font-medium">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
