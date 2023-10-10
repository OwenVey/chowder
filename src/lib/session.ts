import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';

export async function getUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}

export const getSession = () => {
  return getServerSession(authOptions);
};
