import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '@shared/modules/configs/auth.config';

import { AppLayout } from '@shared/modules/layouts/app.layout';
import { LoginInterface } from '../interfaces/login.interface';

interface LoginContainerProps {
  searchParams: {
    redirect_to?: string;
  };
}

export async function LoginContainer({ searchParams }: LoginContainerProps) {
  const { redirect_to = '/' } = searchParams;
  const session = await getServerSession(authOptions);
  if (session?.user) redirect(redirect_to);

  return (
    <AppLayout>
      <LoginInterface redirectTo={redirect_to} />
    </AppLayout>
  );
}
