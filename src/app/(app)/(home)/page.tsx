import Header from '@/components/header';
import { Main } from '@/components/main';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chowder',
};

export default function PlanPage() {
  return (
    <>
      <Header title="Home" />

      <Main>Home Page</Main>
    </>
  );
}
