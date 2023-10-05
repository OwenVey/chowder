'use client';

import { navigation } from '@/constants';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';
import { UserButton } from '@clerk/nextjs';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftToLineIcon, SearchIcon, SoupIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useToggle } from 'usehooks-ts';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { CommandShortcut } from './ui/command';

export function DesktopNav() {
  const pathname = usePathname();
  const [isCollapsed, toggleIsCollapsed] = useToggle();
  const setIsGlobalSearchOpen = useStore((state) => state.setIsGlobalSearchOpen);

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
          size="icon"
          variant="outline"
          className="absolute -right-4 top-12 rounded-full opacity-0 transition-opacity group-hover/nav:opacity-100"
        >
          <ArrowLeftToLineIcon className={cn('h-4 w-4 transition-transform', isCollapsed && '-scale-x-100')} />
        </Button>

        <Button
          onClick={() => setIsGlobalSearchOpen(true)}
          className="justify-start px-3 text-muted-foreground hover:text-muted-foreground"
          variant="outline"
        >
          <SearchIcon className={cn('h-4 w-4 shrink-0')} />

          {!isCollapsed && (
            <span className="ml-2 flex w-full items-center">
              Search
              <CommandShortcut>⌘K</CommandShortcut>
            </span>
          )}
        </Button>

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="space-y-2">
                {navigation
                  .filter(({ device }) => device !== 'mobile')
                  .map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold',
                          pathname.startsWith(item.href)
                            ? 'bg-primary text-white'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                        )}
                      >
                        <item.icon
                          className={cn(
                            pathname.startsWith(item.href)
                              ? 'text-white'
                              : 'text-muted-foreground group-hover:text-foreground',
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
              <UserButton showName />
              {/* <button className="flex shrink-0 items-center gap-x-4 text-sm font-semibold text-foreground">
                <Image
                  className="h-10 w-10 rounded-full bg-muted"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="image of user"
                  width={40}
                  height={40}
                  unoptimized
                />
                {!isCollapsed && 'Tom Cook'}
              </button> */}
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
