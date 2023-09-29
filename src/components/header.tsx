import { PlusIcon } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 items-center border-b bg-background/50 px-4 pt-[calc(env(safe-area-inset-top)-10px)] backdrop-blur-md lg:left-20">
      <div className="grid h-14 grid-cols-3 items-center">
        {/* <div>Left</div> */}
        <div className="col-start-2 justify-self-center font-medium lg:col-span-2 lg:col-start-1 lg:justify-self-start">
          Recipes
        </div>
        <div className="justify-self-end">
          <Button size="icon-sm" variant="ghost">
            <PlusIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
