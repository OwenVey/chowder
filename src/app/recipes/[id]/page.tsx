import { deleteRecipe } from '@/app/actions';
import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import numberToFraction from '@/lib/utils';
import { Trash2Icon } from 'lucide-react';
import { parseIngredient } from 'parse-ingredient';

type RecipePageProps = { params: { id: string } };

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await db.recipe.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!recipe) return <div>No recipe found</div>;

  const ingredients = parseIngredient(recipe.ingredients ?? '');

  return (
    <>
      <Header backHref="/recipes" title={recipe.name}>
        <form action={deleteRecipe.bind(null, recipe.id)}>
          <Button type="submit" size="icon" variant="destructive">
            <Trash2Icon className="h-5 w-5" />
          </Button>
        </form>
      </Header>

      <Main>
        <div className="text-2xl font-bold">{recipe.name}</div>
        <div className="text-muted-foreground">{recipe.description}</div>
        {ingredients.length > 0 && (
          <div className="mt-10 flex flex-col gap-2">
            {ingredients.map((ingredient) => (
              <div key={ingredient.description} className="flex items-center gap-1">
                {ingredient.quantity && (
                  <div className="font-medium tabular-nums diagonal-fractions">
                    {numberToFraction(ingredient.quantity)}
                  </div>
                )}
                <div className="font-medium">{ingredient.unitOfMeasure}</div>
                <div className="text-muted-foreground">{ingredient.description}</div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-10">
          {recipe.directions?.split('\n').map((step, index) => <div key={index}>{step}</div>)}
        </div>
      </Main>
    </>
  );
}
