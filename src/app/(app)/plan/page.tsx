import Header from '@/components/header';
import { Main } from '@/components/main';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chowder - Plan',
};

export default function PlanPage() {
  return (
    <>
      <Header title="Plan" />

      <Main>Plan Page</Main>
    </>
  );
}
