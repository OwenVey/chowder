'use server';

import { db } from '@/lib/db';
import type { RecipeCreate } from '@/types';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export async function createRecipe(recipe: Omit<RecipeCreate, 'userId'>) {
  const { userId } = auth();
  if (!userId) {
    throw new Error('You must be signed in to create a new recipe');
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const newRecipe = await db.recipe.create({ data: { ...recipe, userId } });
  redirect(`/recipes/${newRecipe.id}`);
}

export async function deleteRecipe(id: string) {
  await db.recipe.delete({ where: { id } });
  redirect('/');
}
