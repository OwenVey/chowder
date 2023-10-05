import { NewRecipeForm } from '@/app/recipes/new/new-recipe-form';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';

export default function NewRecipePage() {
  return (
    <>
      <Header backHref="/" title="New Recipe">
        <Button>Save</Button>
      </Header>
      <main className="flex-1 overflow-y-auto">
        <NewRecipeForm />
      </main>
    </>
  );
}
