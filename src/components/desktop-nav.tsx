'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeftToLineIcon,
  CalendarDaysIcon,
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  SoupIcon,
  UtensilsCrossedIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useToggle } from 'usehooks-ts';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Recipes', href: '/recipes', icon: UtensilsCrossedIcon },
  { name: 'Search', href: '/search', icon: SearchIcon },
  { name: 'Plan', href: '/plan', icon: CalendarDaysIcon },
  { name: 'Groceries', href: '/groceries', icon: ShoppingCartIcon },
];

export function DesktopNav() {
  const pathname = usePathname();
  const [isCollapsed, toggleIsCollapsed] = useToggle();

  return (
    <motion.div
      className="group/nav relative z-50 hidden shrink-0 flex-col lg:flex"
      initial={{ width: isCollapsed ? 'auto' : '18rem' }}
      animate={{ width: isCollapsed ? 'auto' : '18rem' }}
    >
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-4">
        <div className="flex h-16 shrink-0 items-center">
          <SoupIcon className="h-8 w-10 text-primary" />
        </div>

        <Button
          onClick={toggleIsCollapsed}
          size="icon-sm"
          variant="outline"
          className="absolute -right-4 top-12 rounded-full opacity-0 transition-opacity group-hover/nav:opacity-100"
        >
          <ArrowLeftToLineIcon className={cn('h-4 w-4 transition-transform', isCollapsed && '-scale-x-100')} />
        </Button>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold',
                        item.href === pathname
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      <item.icon
                        className={cn(
                          item.href === pathname ? 'text-white' : 'text-muted-foreground group-hover:text-foreground',
                          'h-6 w-6 shrink-0',
                        )}
                        aria-hidden="true"
                      />
                      <AnimatePresence initial={false} mode="popLayout">
                        {!isCollapsed && (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <ThemeToggle />
            <li className={cn('mt-auto flex items-center justify-between gap-4 py-3')}>
              <button className="flex shrink-0 items-center gap-x-4 text-sm font-semibold text-foreground">
                <Image
                  className="h-10 w-10 rounded-full bg-muted"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="image of user"
                  width={40}
                  height={40}
                  unoptimized
                />
                {!isCollapsed && 'Tom Cook'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
