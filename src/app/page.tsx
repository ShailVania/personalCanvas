import { Button } from '@/components/ui/button';
import { ThreeCanvas } from '@/components/three-canvas';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center text-center">
      <ThreeCanvas sceneType="contact" />
      <Card className="z-10 transform-gpu p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 md:p-12">
        <h1 className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text font-headline text-5xl font-semibold italic text-transparent md:text-7xl">
          Hi, I'm Shail
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
      </Card>
    </div>
  );
}
