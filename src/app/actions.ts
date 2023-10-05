'use server';

import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';
import { redirect } from 'next/navigation';

export async function createRecipe(userId: string, recipe: RecipeData) {
  console.log('createRecipe()');

  const newRecipe = await db.recipe.create({ data: { ...recipe, userId } });
  redirect(`/recipes/${newRecipe.id}`);
}

const recipeData = Prisma.validator<Prisma.RecipeDefaultArgs>()({
  select: {
    name: true,
    description: true,
  },
});

type RecipeData = Prisma.RecipeGetPayload<typeof recipeData>;
