import { Button } from '@/components/ui/button';
import { ThreeCanvas } from '@/components/three-canvas';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center text-center">
      <ThreeCanvas letter="<S/V>" />
      <div className="z-10">
        <h1 className="flex flex-wrap justify-center bg-gradient-to-r from-primary to-cyan-400 bg-clip-text font-headline text-5xl font-semibold italic text-transparent md:text-7xl">
          {"Hi, I'm Shail".split('').map((char, index) => (
            <span
              key={index}
              className="cursor-pointer rounded-md transition-all duration-200 hover:!bg-primary hover:!text-primary-foreground hover:scale-110"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Front-end Developer | Software Developer | NextGen CTO | Machine Learning and AI Enthusiast
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/resume">Resume</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
