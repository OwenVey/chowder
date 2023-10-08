import { deleteRecipe, getRecipe } from '@/app/(app)/recipes/actions';

import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';
import numberToFraction from '@/lib/utils';
import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { parseIngredient } from 'parse-ingredient';

type RecipePageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const recipe = await getRecipe(params.id);

  return {
    title: `Chowder - ${recipe?.name}`,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipe(params.id);

  if (!recipe) return <div>No recipe found</div>;

  const ingredients = parseIngredient(recipe.ingredients ?? '');

  return (
    <>
      <Header backHref="/recipes" title={recipe.name}>
        <Button size="icon" variant="ghost">
          <Link href={`/recipes/${recipe.id}/edit`}>
            <PenSquareIcon className="h-5 w-5" />
          </Link>
        </Button>
        <form action={deleteRecipe.bind(null, recipe.id)}>
          <Button type="submit" size="icon" variant="destructive-ghost">
            <Trash2Icon className="h-5 w-5" />
          </Button>
        </form>
      </Header>

      <Main className="space-y-10">
        <div className="text-2xl font-bold">{recipe.name}</div>
        <div className="text-muted-foreground">{recipe.description}</div>
        <div className="">
          <div>{recipe.servings} servings</div>
          <div>Prep Time: {recipe.prepTime} min</div>
          <div>Cook Time: {recipe.cookTime} min</div>
        </div>
        {ingredients.length > 0 && (
          <div className="flex flex-col gap-2">
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
        <div className="space-y-4">
          {recipe.directions?.split('\n').map((step, index) => <div key={index}>{step}</div>)}
        </div>
      </Main>
    </>
  );
}
