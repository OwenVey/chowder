import Header from '@/components/header';
import { Main } from '@/components/main';
import { auth } from '@clerk/nextjs';

export default async function PlanPage() {
  const { userId } = auth();

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  return (
    <>
      <Header title="Plan" />

      <Main>Plan Page</Main>
    </>
  );
}
