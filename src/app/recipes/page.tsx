import { AddRecipeModal } from '@/components/add-recipe-modal';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

export default async function RecipesPage() {
  const { userId } = auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const recipes = await db.recipe.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Header title="Recipes">
        <AddRecipeModal>
          <Button size="icon" variant="ghost">
            <PlusIcon className="h-5 w-5" />
          </Button>
        </AddRecipeModal>
      </Header>

      <main className="flex flex-col gap-2 p-4">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="rounded border p-2">
            <div>Name: {recipe.name}</div>
            <div className="text-sm text-muted-foreground">Description: {recipe.description}</div>
          </Link>
        ))}
      </main>
    </>
  );
}
