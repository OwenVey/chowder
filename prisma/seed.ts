import { db } from '~/prisma/db';
import recipes from './recipes.json';

async function main() {
  const userId = 'user_2W2dixXTiGeaxKQidbmXlZ7fm4V';

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
