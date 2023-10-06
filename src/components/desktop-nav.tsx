'use client';

import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { navigation } from '@/constants';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';
import { SignOutButton, useUser } from '@clerk/nextjs';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftToLineIcon, LogOutIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import Image from 'next/image';
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
  const { user } = useUser();

  return (
    <motion.aside
      className="group/nav relative z-50 hidden shrink-0 flex-col lg:flex"
      initial={{ width: isCollapsed ? 'auto' : '18rem' }}
      animate={{ width: isCollapsed ? 'auto' : '18rem' }}
    >
      <div className="flex grow flex-col gap-y-5 overflow-hidden border-r bg-background px-4">
        <div className="flex h-16 shrink-0 items-center">
          <Logo className="h-8 w-10" />
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

        <nav className="overflow-y-auto">
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
        </nav>

        <ThemeToggle />
        <div className={cn('mt-auto flex items-center justify-between gap-4 py-3')}>
          {/* <UserButton /> */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-full shrink-0 items-center gap-4 text-left">
                <Image
                  className="h-10 w-10 rounded-full bg-muted"
                  src={user.imageUrl}
                  alt="User image"
                  width={40}
                  height={40}
                  unoptimized
                />
                <AnimatePresence initial={false} mode="popLayout">
                  {!isCollapsed && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="truncate text-sm font-semibold text-foreground">{user.fullName}</div>
                      <div className="truncate text-xs text-muted-foreground">
                        {user.primaryEmailAddress?.emailAddress}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Manage Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex shrink-0 items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
