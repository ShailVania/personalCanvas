import { Button } from '@/components/ui/button';
import { ThreeCanvas } from '@/components/three-canvas';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center text-center">
      <ThreeCanvas letter="<s/v>" />
      <div className="z-10">
        <h1 className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text font-headline text-5xl font-bold text-transparent md:text-7xl">
          A Creative Digital Canvas
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I'm a developer and designer, passionate about building beautiful and interactive web experiences. This is my digital playground.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
