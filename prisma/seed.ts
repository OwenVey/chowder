import { db } from '@/lib/db';
import recipes from './recipes.json';

async function main() {
  const userId = 'clnklzu9t0000mx5x8xiijfya';

  recipes.forEach(
    async (recipe) => await db.recipe.upsert({ where: { id: recipe.id }, update: {}, create: { ...recipe, userId } }),
  );
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
