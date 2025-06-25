'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 md:hidden md:h-auto md:border-0 md:bg-transparent md:px-6">
      <SidebarTrigger />
      <div className="flex-1" />
    </header>
  );
}
