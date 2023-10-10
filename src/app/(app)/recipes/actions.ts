'use server';

import { db } from '@/lib/db';
import { getSession } from '@/lib/session';
import type { RecipeCreate, RecipeUpdate } from '@/types';
import { revalidateTag, unstable_cache } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createRecipe(recipe: Omit<RecipeCreate, 'userId' | 'user'>) {
  const session = await getSession();
  if (!session) {
    throw new Error('You must be signed in to create a new recipe');
  }

  const userId = session.user.id;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const newRecipe = await db.recipe.create({ data: { ...recipe, userId } });
  revalidateTag(`recipes-${userId}`);
  redirect(`/recipes/${newRecipe.id}`);
}

export async function deleteRecipe(id: string) {
  const session = await getSession();
  if (!session) {
    throw new Error('You must be signed in to create a new recipe');
  }
  const userId = session.user.id;

  await db.recipe.delete({ where: { id, userId } });
  revalidateTag(`recipes-${userId}`);
  redirect('/recipes');
}

export async function getRecipesByUserId(userId: string) {
  return await unstable_cache(async () => await db.recipe.findMany({ where: { userId } }), [userId], {
    tags: [`recipes-${userId}`],
  })();
}

export async function getRecipe(id: string) {
  return await unstable_cache(async () => await db.recipe.findUnique({ where: { id } }), [id], {
    tags: [`recipe-${id}`],
  })();
}

export async function editRecipe(id: string, recipe: RecipeUpdate) {
  const session = await getSession();
  if (!session) {
    throw new Error('You must be signed in to create a new recipe');
  }
  const userId = session.user.id;

  const updatedRecipe = await db.recipe.update({
    where: { id, userId },
    data: recipe,
  });
  revalidateTag(`recipe-${id}`);
  return updatedRecipe;
}
