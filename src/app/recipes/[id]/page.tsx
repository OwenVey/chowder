import Header from '@/components/header';
import { db } from '@/lib/db';

type RecipePageProps = { params: { id: string } };

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await db.recipe.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!recipe) return <div>No recipe found</div>;

  return (
    <>
      <Header backHref="/recipes" title={recipe.name}></Header>

      <div className="p-4">{recipe.name}</div>
    </>
  );
}
