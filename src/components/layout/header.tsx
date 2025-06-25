'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-12 items-center gap-4 border-b border-border/20 bg-card/40 px-4 backdrop-blur-xl md:hidden">
      <SidebarTrigger />
      <div className="flex-1" />
    </header>
  );
}
