'use client';

import { navigation } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center gap-x-6 border-t bg-background px-6 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 lg:hidden">
      <ul role="list" className="flex w-full items-center justify-between">
        {navigation
          .filter(({ device }) => device !== 'desktop')
          .map((item) => (
            <li key={item.name} className="">
              <Link
                href={item.href}
                className={cn(
                  'group flex flex-col items-center rounded-lg text-sm',
                  item.href === pathname ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className=" mt-1 text-[13px] font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
