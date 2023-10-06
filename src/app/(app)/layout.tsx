// import Header from '@/components/header';
import { DesktopNav } from '@/components/desktop-nav';
import { GlobalSearch } from '@/components/global-search';
import MobileNav from '@/components/mobile-nav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalSearch />
      <DesktopNav />
      <div className="flex flex-1 flex-col overflow-auto">{children}</div>
      <MobileNav />
    </>
  );
}
