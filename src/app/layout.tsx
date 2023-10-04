import { DesktopNav } from '@/components/desktop-nav';
// import Header from '@/components/header';
import { GlobalSearch } from '@/components/global-search';
import MobileNav from '@/components/mobile-nav';
import { Providers } from '@/components/providers';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chowder',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  appleWebApp: {
    title: 'Chowder',
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html
        className="flex h-[100dvh] pt-[env(safe-area-inset-top)] antialiased [-webkit-tap-highlight-color:transparent]"
        lang="en"
        suppressHydrationWarning
      >
        <body
          className={cn(
            inter.className,
            'flex w-full flex-col overflow-hidden bg-background text-foreground lg:flex-row',
          )}
        >
          <Providers>
            <GlobalSearch />
            <DesktopNav />
            {/* <Header /> */}
            <main className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</main>
            <MobileNav />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
