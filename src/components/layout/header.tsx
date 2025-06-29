'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { ThemeSwitcher } from '../theme-switcher';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useAudio } from '@/hooks/use-audio';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Mail },
];

const AnimatedHamburgerIcon = ({ open }: { open: boolean }) => (
  <div
    className="relative h-6 w-6"
    aria-label={open ? 'Close menu' : 'Open menu'}
  >
    <span
      className={cn(
        'absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out',
        open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[6px]'
      )}
    />
    <span
      className={cn(
        'absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-300 ease-in-out',
        open ? 'opacity-0' : 'opacity-100'
      )}
    />
    <span
      className={cn(
        'absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out',
        open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-[6px]'
      )}
    />
  </div>
);

export function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const { isMuted, toggleMute } = useAudio();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const MuteButton = (
    <Button variant="ghost" size="icon" onClick={toggleMute} aria-label="Toggle Sound" className="hover:bg-transparent hover:text-inherit">
      {isMounted && isMuted ? <VolumeX /> : <Volume2 />}
    </Button>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-6">
        
        {/* Left section: Logo */}
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center space-x-2">
            {isMounted && theme === 'dark' ? (
              <img src="/darkIcon.svg" alt="Dark Icon" className="h-8 w-8" />
            ) : (
              <img src="/lightIcon.svg" alt="Light Icon" className="h-8 w-8" />
            )}
            <span className="font-bold sm:inline-block">Shail Vania</span>
          </Link>
        </div>

        {/* Middle section: Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-bold transition-colors',
                pathname === item.href
                  ? 'bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent'
                  : 'text-foreground/60 hover:bg-gradient-to-r hover:from-primary hover:to-cyan-400 hover:bg-clip-text hover:text-transparent'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Right section: Theme Switcher and Mobile Menu */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            {MuteButton}
            <ThemeSwitcher />
          </div>

          <div className="md:hidden">
            <DropdownMenu onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <AnimatedHamburgerIcon open={isMenuOpen} />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[90vw] max-w-md p-6">
                <div className="flex flex-col items-center justify-center space-y-6">
                    {navItems.map((item) => (
                      <DropdownMenuItem key={item.href} asChild className="w-full cursor-pointer text-xl focus:bg-transparent">
                        <Link href={item.href} className="group flex w-full items-center justify-center gap-4" onClick={() => setIsMenuOpen(false)}>
                            <item.icon className={cn(
                              'h-7 w-7',
                              pathname === item.href ? 'text-primary' : 'text-foreground/60',
                              'group-hover:text-primary'
                          )} />
                          <span className={cn(
                              'font-bold transition-colors',
                              pathname === item.href
                                  ? 'bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent'
                                  : 'text-foreground/60',
                              'group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent'
                          )}>
                              {item.label}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator className="w-full" />
                    <DropdownMenuLabel className="w-full text-base font-normal">
                      <div className="flex w-full items-center justify-center gap-8">
                        <ThemeSwitcher />
                        {MuteButton}
                      </div>
                    </DropdownMenuLabel>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
