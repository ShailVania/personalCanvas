import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TechShowcase } from "./tech-showcase";
import { ThreeCanvas } from "@/components/three-canvas";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="relative w-full">
      <ThreeCanvas sceneType="contact" />
      <div className="relative z-10 space-y-12">
        <Card className="transform-gpu p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/RQND Pro.gif" alt="Shail Vania" data-ai-hint="avatar portrait" />
              <AvatarFallback>SV</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text font-headline text-5xl font-semibold italic text-transparent md:text-6xl">About Me</h1>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                I am a passionate software engineer with a love for creating dynamic and user-friendly web applications. My journey in tech started with a simple curiosity about how websites worked, and it has since blossomed into a full-fledged career. I thrive on challenges and am constantly learning new technologies to push the boundaries of what's possible on the web.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring the outdoors, experimenting with new recipes, or listening to music.
              </p>
            </div>
          </div>
        </Card>
        
        <div className="space-y-6">
          <Card className="transform-gpu p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 md:p-8">
            <h2 className="font-headline text-4xl font-semibold italic">My Tech Stack</h2>
            <p className="mt-2 text-lg text-muted-foreground">Technologies I love to work with.</p>
          </Card>
          <TechShowcase />
        </div>
      </div>
    </div>
  );
}
