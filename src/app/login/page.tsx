import { authRoutes } from '@/subdomains/auth/routes';

interface LoginPageProps {
  searchParams: {
    redirect_to?: string;
  };
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return <authRoutes.LOGIN searchParams={searchParams} />;
}
