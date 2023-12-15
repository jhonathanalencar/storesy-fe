export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full bg-storesy-gray-900 text-storesy-gray-200">
      {children}
    </main>
  );
}
