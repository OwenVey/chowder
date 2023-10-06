import Header from '@/components/header';
import { Main } from '@/components/main';
import { auth } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chowder - Plan',
};

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
