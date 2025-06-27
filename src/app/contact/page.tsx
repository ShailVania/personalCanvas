import { ThreeCanvas } from '@/components/three-canvas';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
      <ThreeCanvas sceneType="contact" />
      <Card className="z-10 flex w-full max-w-3xl transform-gpu flex-col items-center p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 md:p-12">
        <div className="w-full text-center">
          <h1 className="font-headline text-5xl font-semibold italic md:text-6xl">Contact Me</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground">
            Have a project in mind or just want to say hi? Feel free to send me an email. I'm always open to discussing new opportunities.
          </p>
        </div>
        <Button asChild size="lg" className="mt-8">
          <a href="mailto:vaniashail@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            vaniashail@gmail.com
          </a>
        </Button>
      </Card>
    </div>
  );
}
