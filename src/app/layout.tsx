import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';

import './globals.css';

const merriweather_sans = Merriweather_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Storesy',
  description:
    "Welcome to Storesy, where every click unveils a world of possibilities! Storesy is not just an e-commerce platform; it's your gateway to an immersive shopping experience. Discover a curated collection of fashion, electronics, home decor, and more, meticulously handpicked to cater to your unique tastes and preferences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${merriweather_sans.className} h-full`}>
        <main className="h-full bg-storesy-gray-900 text-storesy-gray-200">
          {children}
        </main>
      </body>
    </html>
  );
}
