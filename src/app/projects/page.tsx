import { ProjectCard } from '@/components/project-card';
import { ThreeCanvas } from '@/components/three-canvas';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'Project Alpha',
    description: 'An innovative web application that leverages AI to create stunning visuals. Built with Next.js and Three.js.',
    imageUrl: 'https://placehold.co/600x400.png',
    projectUrl: '#',
    tags: ['Next.js', 'Three.js', 'AI'],
    imageHint: 'abstract technology',
  },
  {
    title: 'Portfolio Canvas',
    description: 'This very portfolio website. A showcase of my skills in front-end development and design.',
    imageUrl: 'https://placehold.co/600x400.png',
    projectUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'Three.js'],
    imageHint: 'creative design',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a custom backend, payment integration, and a sleek user interface.',
    imageUrl: 'https://placehold.co/600x400.png',
    projectUrl: '#',
    tags: ['React', 'Node.js', 'Firebase'],
    imageHint: 'online shopping',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, helping users to derive insights easily.',
    imageUrl: 'https://placehold.co/600x400.png',
    projectUrl: '#',
    tags: ['React', 'Data Viz', 'Dashboards'],
    imageHint: 'charts graphs',
  },
];

export default function Projects() {
  return (
    <div className="relative w-full">
      <ThreeCanvas sceneType="contact" />
      <div className="relative z-10 space-y-8">
        <Card className="transform-gpu p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 md:p-12">
          <h1 className="font-headline text-5xl font-semibold italic md:text-6xl">My Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work.</p>
        </Card>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
