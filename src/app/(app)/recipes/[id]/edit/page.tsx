import { getRecipe } from '@/app/(app)/recipes/actions';
import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';

import { getUser } from '@/lib/session';

export default async function EditRecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  if (!recipe) return <div>No recipe found</div>;

  const user = await getUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  if (recipe.userId !== user.id) return <div>You can not edit this recipe</div>;

  return (
    <>
      <Header backHref={`/recipes/${recipe.id}`} title="Edit Recipe">
        <Button type="submit" variant="primary-ghost">
          Save
        </Button>
      </Header>

      <Main>Edit {recipe.name}</Main>
    </>
  );
}
