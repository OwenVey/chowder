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
    <header className="grid grid-cols-3 items-center border-b bg-background p-2">
      {backHref ? (
        <Link href={backHref} className="flex items-center">
          <ChevronLeftIcon className="h-6 w-6" />
          <span className="text-sm">{backLabel ? backLabel : 'Back'}</span>
        </Link>
      ) : (
        <div></div>
      )}
      <h1 className="justify-self-center font-medium">{title}</h1>
      <div className="flex gap-2 justify-self-end">{children}</div>
    </header>
  );
}
