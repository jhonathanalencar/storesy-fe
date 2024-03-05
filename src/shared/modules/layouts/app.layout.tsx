import { Footer } from '../components/footer.component';
import { Navbar } from '../components/navbar/navbar.component';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-full flex-col bg-storesy-gray-900 text-storesy-gray-200">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}
