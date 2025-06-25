import { Code, Github, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 px-6 py-4 md:h-16 md:flex-row md:py-0">
        <div className="flex items-center gap-3">
          <Code className="h-8 w-8" />
          <p className="text-sm leading-loose">
            Built by You. Inspired by Grok.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}