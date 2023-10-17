// import Header from '@/components/header';
import { Providers } from '@/components/providers';
import { cn } from '@/lib/utils';
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
    <html
      className={cn(inter.className, 'h-[100dvh] antialiased [-webkit-tap-highlight-color:transparent]')}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-background pt-[env(safe-area-inset-top)] text-foreground lg:flex-row">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
