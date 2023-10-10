import { deleteRecipe, getRecipe } from '@/app/(app)/recipes/actions';

import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import numberToFraction from '@/lib/utils';

import { getUser } from '@/lib/session';
import { MinusIcon, PenSquareIcon, PlusIcon, TimerIcon, Trash2Icon, UsersIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { parseIngredient } from 'parse-ingredient';

type RecipePageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const recipe = await getRecipe(params.id);

  return {
    title: `Chowder - ${recipe?.name ?? 'Recipe Not Found'}`,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipe(params.id);
  if (!recipe) notFound();

  // if recipe is private we need to verify the user is the creator of it
  if (!recipe.public) {
    const user = await getUser();
    if (!user) return new Response('Unauthorized', { status: 401 });
    if (user.id !== recipe.userId) return <div>Recipe is private</div>;
  }

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

      <div className="flex flex-1 overflow-hidden @container">
        <Main className="p-0">
          {recipe.image && (
            <Image
              className="h-52 w-full object-cover @2xl:hidden"
              src={recipe.image}
              alt={`image of ${recipe.name}`}
              height={300}
              width={400}
            />
          )}

          <div className="p-4">
            <div className="text-2xl font-bold">{recipe.name}</div>
            <div className="mt-2 text-muted-foreground">{recipe.description}</div>

            <div className="mt-10 flex items-center text-sm font-medium">
              <div className="flex items-center">
                <UsersIcon className="mr-2 h-5 w-5" />
                <div>
                  <div className="leading-4">{recipe.servings}</div>
                  <div className="text-xs text-muted-foreground">servings</div>
                </div>
              </div>
              <Separator className="mx-4 h-8" orientation="vertical" />
              <div className="flex items-center">
                <TimerIcon className="mr-2 h-5 w-5" />
                <div>
                  <div className="leading-4">{recipe.prepTime} min</div>
                  <div className="text-xs text-muted-foreground">prepare</div>
                </div>
              </div>
              <Separator className="mx-4 h-8" orientation="vertical" />
              <div className="flex items-center">
                <TimerIcon className="mr-2 h-5 w-5" />
                <div>
                  <div className="leading-4">{recipe.cookTime} min</div>
                  <div className="text-xs text-muted-foreground">cook</div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="ingredients" className="mt-10 @2xl:hidden">
              <TabsList className="w-full">
                <TabsTrigger className="flex-1" value="ingredients">
                  Ingredients
                </TabsTrigger>
                <TabsTrigger className="flex-1" value="directions">
                  Directions
                </TabsTrigger>
                <TabsTrigger className="flex-1" value="nutrition">
                  Nutrition
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ingredients" className="-mx-4">
                {ingredients.length > 0 ? (
                  <div className="flex flex-col divide-y @2xl:hidden">
                    {ingredients.map((ingredient) => (
                      <div
                        key={ingredient.description}
                        className="group flex w-full items-center px-4 py-3 [&:has([data-state=checked])]:bg-muted"
                      >
                        <Checkbox id={ingredient.description} className="h-5 w-5" />
                        <label
                          htmlFor={ingredient.description}
                          className="ml-2 flex w-full items-center justify-between"
                        >
                          <span className="font-medium capitalize decoration-2 group-[&:has([data-state=checked])]:text-muted-foreground group-[&:has([data-state=checked])]:line-through">
                            {ingredient.description}
                          </span>

                          <span className="text-muted-foreground">
                            {ingredient.quantity && (
                              <span className="whitespace-nowrap tabular-nums diagonal-fractions">
                                {numberToFraction(ingredient.quantity)}&nbsp;
                              </span>
                            )}
                            {ingredient.unitOfMeasure}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No ingredients for this recipe</div>
                )}
              </TabsContent>
              <TabsContent value="directions">
                <div className="divide-y">
                  {recipe.directions?.split(/\s*\n+\s*/).map((step, index) => (
                    <div key={index} className="py-4">
                      <div className="text-sm font-bold uppercase tracking-wide">Step {index + 1}</div>
                      <p className="mt-2 text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="nutrition">Nutrition Info</TabsContent>
            </Tabs>

            <div className="mt-10 hidden @2xl:block">
              <h2 className="text-lg font-semibold">Directions</h2>
              <div className="divide-y">
                {recipe.directions?.split(/\s*\n+\s*/).map((step, index) => (
                  <div key={index} className="py-4">
                    <div className="text-sm font-bold uppercase tracking-wide">Step {index + 1}</div>
                    <p className="mt-2 text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Main>

        <aside className="hidden w-96 overflow-y-auto border-l bg-muted/50 @2xl:block">
          {recipe.image && (
            <Image
              className="h-72 w-full object-cover"
              src={recipe.image}
              alt={`image of ${recipe.name}`}
              height={400}
              width={400}
            />
          )}

          {ingredients.length > 0 && (
            <div className="flex flex-col gap-2 px-4 pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Ingredients</h2>
                <div className="flex items-center">
                  <div className="text-sm">4 servings</div>
                  <button className="ml-2 rounded-l border bg-background px-2 py-1 hover:bg-muted">
                    <MinusIcon className="h-3 w-3" />
                  </button>
                  <button className="rounded-r border border-l-0 bg-background px-2 py-1 hover:bg-muted">
                    <PlusIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {ingredients.map((ingredient) => (
                <div key={ingredient.description}>
                  {ingredient.quantity && (
                    <span className="font-medium tabular-nums diagonal-fractions">
                      {numberToFraction(ingredient.quantity)}
                    </span>
                  )}
                  <span className="font-medium"> {ingredient.unitOfMeasure} </span>
                  <span className="text-muted-foreground">{ingredient.description}</span>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
