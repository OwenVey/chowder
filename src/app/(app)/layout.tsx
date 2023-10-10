// import Header from '@/components/header';
import { SessionProvider } from '@/app/(app)/session-provider';
import { DesktopNav } from '@/components/desktop-nav';
import { GlobalSearch } from '@/components/global-search';
import MobileNav from '@/components/mobile-nav';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <GlobalSearch />
        <DesktopNav />
        <div className="flex flex-1 flex-col overflow-auto">{children}</div>
        <MobileNav />
      </SessionProvider>
    </>
  );
}
