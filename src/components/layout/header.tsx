'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Code,
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Menu,
} from 'lucide-react';
import { ThemeSwitcher } from '../theme-switcher';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-6">
        
        {/* Left section: Logo */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8" />
            <span className="font-bold sm:inline-block">Personal Canvas</span>
          </Link>
        </div>

        {/* Middle section: Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors',
                pathname === item.href
                  ? 'font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent'
                  : 'text-foreground/60 hover:font-bold hover:bg-gradient-to-r hover:from-primary hover:to-cyan-400 hover:bg-clip-text hover:text-transparent'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Right section: Theme Switcher and Mobile Menu */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="cursor-pointer focus:bg-transparent">
                    <Link href={item.href} className="group flex w-full items-center gap-2">
                        <item.icon className={cn(
                          "h-4 w-4",
                          pathname === item.href ? 'text-primary' : 'text-foreground/60',
                          'group-hover:text-primary'
                      )} />
                      <span className={cn(
                          'transition-colors',
                          pathname === item.href
                              ? 'font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent'
                              : 'text-foreground/60',
                          'group-hover:font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent'
                      )}>
                          {item.label}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="focus:bg-transparent">
                  <div className="flex w-full items-center justify-center">
                    <ThemeSwitcher />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
