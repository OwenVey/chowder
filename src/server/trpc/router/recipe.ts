import { newRecipeSchema } from '@/components/Recipie/NewRecipeModal';
import { z } from 'zod';
import { protectedProcedure, router } from '../trpc';

export const recipeRouter = router({
  create: protectedProcedure.input(newRecipeSchema).mutation(async ({ input, ctx }) => {
    const newRecipe = await ctx.prisma.recipe.create({
      data: {
        ...input,
        ingredients: { createMany: { data: input.ingredients } },
        photo: 'https://vero.cooking/chilli.jpg',
        userId: ctx.session.user.id,
      },
    });
    return newRecipe;
  }),
  getAll: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.recipe.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        ingredients: true,
      },
    }),
  ),
  getById: protectedProcedure.input(z.string()).query(({ input: id, ctx }) =>
    ctx.prisma.recipe.findUnique({
      where: {
        id,
      },
      include: {
        ingredients: true,
      },
    }),
  ),
  deleteById: protectedProcedure.input(z.string()).mutation(({ input: id, ctx }) =>
    ctx.prisma.recipe.delete({
      where: {
        id,
      },
    }),
  ),
});
