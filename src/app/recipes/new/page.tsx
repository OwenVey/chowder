import Header from '@/components/header';
import { Button } from '@/components/ui/button';

export default function NewRecipePage() {
  return (
    <>
      <Header backHref="/" title="New Recipe">
        <Button>Save</Button>
      </Header>
      <p className="flex-1 overflow-y-auto">new recipe page</p>
    </>
  );
}
