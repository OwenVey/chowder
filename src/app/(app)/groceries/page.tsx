import Header from '@/components/header';
import { Main } from '@/components/main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chowder - Groceries',
};

export default function GroceriesPage() {
  return (
    <>
      <Header title="Groceries" />

      <Main>Groceries Page</Main>
    </>
  );
}
