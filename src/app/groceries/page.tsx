import Header from '@/components/header';
import { Main } from '@/components/main';
import { auth } from '@clerk/nextjs';

export default async function GroceriesPage() {
  const { userId } = auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  return (
    <>
      <Header title="Groceries" />

      <Main>Groceries Page</Main>
    </>
  );
}
