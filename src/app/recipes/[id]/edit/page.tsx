import { getRecipe } from '@/app/recipes/actions';
import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';

export default async function EditRecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  if (!recipe) return <div>No recipe found</div>;

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
