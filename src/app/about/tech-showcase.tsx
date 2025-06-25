'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Component, Database, Code, Layers, PenTool, Rocket, Wind, type LucideIcon } from 'lucide-react';

const technologies: { name: string; icon: LucideIcon }[] = [
  { name: 'Next.js', icon: Rocket },
  { name: 'React', icon: Component },
  { name: 'Node.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Figma', icon: PenTool },
  { name: 'Firebase', icon: Database },
  { name: 'Three.js', icon: Layers },
  { name: 'AI/ML', icon: BrainCircuit },
];

export function TechShowcase() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((tech, i) => (
                <Card
                    key={tech.name}
                    className="group transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
                >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <tech.icon className="h-12 w-12 text-muted-foreground transition-colors group-hover:text-primary" />
                        <p className="mt-4 font-semibold">{tech.name}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
