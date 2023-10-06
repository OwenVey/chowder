import { NewRecipeForm } from '@/app/(app)/recipes/new/new-recipe-form';
import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';

export default function NewRecipePage() {
  return (
    <>
      <Header backHref="/" title="New Recipe">
        <Button form="create-recipe" type="submit" variant="primary-ghost">
          Create
        </Button>
      </Header>
      <Main>
        <NewRecipeForm />
      </Main>
    </>
  );
}
