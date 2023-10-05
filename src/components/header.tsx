import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';

type HeaderProps = {
  title: string;
  backHref?: string;
  backLabel?: string;
  children?: React.ReactNode;
};
export default function Header({ title, backHref, backLabel, children }: HeaderProps) {
  return (
    <header className="grid h-14 shrink-0 grid-cols-3 items-center border-b bg-background px-2">
      <div>
        {backHref && (
          <Link href={backHref} className="flex w-fit items-center">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="text-sm">{backLabel ? backLabel : 'Back'}</span>
          </Link>
        )}
      </div>
      <h1 className="max-w-[15rem] justify-self-center truncate whitespace-nowrap font-medium lg:max-w-none">
        {title}
      </h1>
      <div className="flex gap-2 justify-self-end">{children}</div>
    </header>
  );
}
