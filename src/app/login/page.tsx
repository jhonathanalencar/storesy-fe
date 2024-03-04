import type { Metadata } from 'next';

import { authRoutes } from '@subdomains/auth/routes';

interface LoginPageProps {
  searchParams: {
    redirect_to?: string;
  };
}

export const metadata: Metadata = {
  title: 'Storesy | Sign-In',
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  return <authRoutes.LOGIN searchParams={searchParams} />;
}
