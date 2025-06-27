'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
    BrainCircuit, 
    ClipboardCheck, 
    Cloud, 
    Code, 
    Component, 
    Database, 
    Github, 
    Layers, 
    Rocket, 
    Server, 
    Smartphone, 
    Wind, 
    type LucideIcon 
} from 'lucide-react';

const technologies: { name: string; icon: LucideIcon }[] = [
  { name: 'Next.js', icon: Rocket },
  { name: 'React', icon: Component },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Node.js', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'Django', icon: Server },
  { name: 'TypeScript', icon: Code },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Firebase', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'Three.js', icon: Layers },
  { name: 'GitHub', icon: Github },
  { name: 'Jira', icon: ClipboardCheck },
  { name: 'AI/ML', icon: BrainCircuit },
];

export function TechShowcase() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technologies.map((tech) => (
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
