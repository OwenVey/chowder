import { AddRecipeModal } from '@/components/add-recipe-modal';
import Header from '@/components/header';
import { Main } from '@/components/main';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
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

      <Main>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="flex flex-col overflow-hidden rounded-xl border hover:bg-muted"
            >
              <Image
                className="h-40 w-full object-cover"
                src={recipe?.image ?? 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'}
                alt="TODO"
                width={100}
                height={100}
                unoptimized
              />
              <div className="flex flex-col px-4 py-2">
                <div className="line-clamp-1 font-semibold">{recipe.name}</div>
                <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">{recipe.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </Main>
    </>
  );
}
