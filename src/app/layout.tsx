import Navbar from '@/components/navbar';
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
        className="min-h-[100dvh] pt-[env(safe-area-inset-top)] [-webkit-tap-highlight-color:transparent]"
        lang="en"
        suppressHydrationWarning
      >
        <body className={cn(inter.className, 'flex bg-background-muted text-foreground')}>
          <Providers>
            {/* Safe area blur for mobile */}
            <div className="fixed top-0 z-50 h-[env(safe-area-inset-top)] w-full backdrop-blur-md"></div>
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
