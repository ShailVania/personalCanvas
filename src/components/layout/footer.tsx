'use client';

import { Github, Linkedin, Youtube } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="w-full py-2">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-125 hover:drop-shadow-[0_0_4px_hsl(var(--primary))] [&_svg]:size-6"
        >
          <a href="https://github.com/ShailVania" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-125 hover:drop-shadow-[0_0_4px_hsl(var(--primary))] [&_svg]:size-6"
        >
          <a href="http://www.youtube.com/@ShailVania" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-125 hover:drop-shadow-[0_0_4px_hsl(var(--primary))] [&_svg]:size-6"
        >
          <a href="https://www.linkedin.com/in/shailvania/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </Button>
      </div>
    </footer>
  );
}
