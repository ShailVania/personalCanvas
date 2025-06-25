import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex h-[calc(100vh-6rem)] flex-col items-center justify-center overflow-hidden rounded-2xl bg-card/60 backdrop-blur-xl glass-border">
      <div className="relative z-10 flex flex-col items-center gap-6 rounded-2xl bg-black/10 p-8 text-center backdrop-blur-sm">
        <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
          Welcome to my Canvas
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          I'm a creative developer and designer, passionate about building beautiful and interactive web experiences. This is my digital playground.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Contact Me</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/resume">My Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
