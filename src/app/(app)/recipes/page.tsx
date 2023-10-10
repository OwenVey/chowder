import { getRecipesByUserId } from '@/app/(app)/recipes/actions';
import { RecipeCard } from '@/app/(app)/recipes/recipe-card';
import { AddRecipeModal } from '@/components/add-recipe-modal';
import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';

import { getUser } from '@/lib/session';
import { PlusIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chowder - Recipes',
};

export default async function RecipesPage() {
  const user = await getUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  const recipes = await getRecipesByUserId(user.id);

  return (
    <>
      <Header title="Recipes">
        <AddRecipeModal>
          <Button size="icon" variant="ghost">
            <PlusIcon className="h-5 w-5" />
          </Button>
        </AddRecipeModal>
      </Header>

      <Main className="@container">
        <div className="grid grid-cols-1 gap-4 @md:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 @[96rem]:grid-cols-6 @[112rem]:grid-cols-7">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </Main>
    </>
  );
}
