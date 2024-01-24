import { Navbar } from '../components/navbar/navbar.component';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-full bg-storesy-gray-900 text-storesy-gray-200">
      <Navbar />
      {children}
    </main>
  );
}
