import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TechShowcase } from "./tech-showcase";
import { ThreeCanvas } from "@/components/three-canvas";

export default function About() {
  return (
    <div className="relative w-full">
      <ThreeCanvas sceneType="contact" />
      <div className="relative z-10 space-y-12">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/RQND Pro.gif" alt="Shail Vania" data-ai-hint="avatar portrait" />
            <AvatarFallback>SV</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-headline text-5xl font-semibold italic md:text-6xl">About Me</h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              I am a passionate software engineer with a love for creating dynamic and user-friendly web applications. My journey in tech started with a simple curiosity about how websites worked, and it has since blossomed into a full-fledged career. I thrive on challenges and am constantly learning new technologies to push the boundaries of what's possible on the web.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring the outdoors, experimenting with new recipes, or contributing to open-source projects.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-center font-headline text-4xl font-semibold italic">My Tech Stack</h2>
          <p className="text-center text-lg text-muted-foreground">Technologies I love to work with.</p>
          <TechShowcase />
        </div>
      </div>
    </div>
  );
}
