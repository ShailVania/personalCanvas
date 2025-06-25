'use client';

import { Github, Linkedin, Youtube } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-2">
      <div className="container flex flex-col items-center gap-1 text-center">
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-125 hover:drop-shadow-[0_0_4px_hsl(var(--primary))]"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-125 hover:drop-shadow-[0_0_4px_hsl(var(--primary))]"
          >
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-125 hover:drop-shadow-[0_0_4px_hsl(var(--primary))]"
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {currentYear
            ? `© ${currentYear} Personal Canvas. All Rights Reserved.`
            : '\u00A0'}
        </p>
      </div>
    </footer>
  );
}
