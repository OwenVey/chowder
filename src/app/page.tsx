import { ThemeToggle } from '@/components/theme-toggle';
import { UserButton, auth } from '@clerk/nextjs';

export default async function Home() {
  const { userId } = auth();
  // const user: User | null = await currentUser();
  return (
    <main>
      <pre className="text-xs">{JSON.stringify(userId, null, 2)}</pre>
      <UserButton />
      <ThemeToggle />
    </main>
  );
}
