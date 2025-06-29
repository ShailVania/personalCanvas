'use client';

import { Header } from './header';
import { Footer } from './footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-6 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
