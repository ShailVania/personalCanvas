import { ProjectCard } from '@/components/project-card';
import { ThreeCanvas } from '@/components/three-canvas';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'Q-win',
    description: 'An innovative event management app made for University of Windsor',
    imageUrl: 'qwin.svg',
    animatedImageUrl: '/qwin.gif',
    projectUrl: 'https://qwin.web.app/',
    tags: ['React', 'Firebase', 'TypeScript'],
    imageHint: 'computer with project website',
  },
  {
    title: 'Trek-Tix',
    description: 'An adventure ticket booking platform for nearby experiences.',
    imageUrl: 'trekTixNew.svg',
    animatedImageUrl: '/trekTix.gif',
    projectUrl: 'https://github.com/ShailVania/Adventure-Event-Booking',
    tags: ['Python', 'Django'],
    imageHint: 'creative design',
  },
  {
    title: 'Coming Soon',
    description: 'More projects are in the works! Check back later.',
    imageUrl: 'https://images.unsplash.com/photo-1503980850968-b7c3b4af0e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx1bmRlciUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTExMTE1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    projectUrl: '#',
    tags: ['In Progress'],
    imageHint: 'under construction wrench',
  },
  {
    title: 'Coming Soon',
    description: 'More projects are in the works! Check back later.',
    imageUrl: 'https://images.unsplash.com/photo-1625470496744-a01bf36a262f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx1bmRlciUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NTExMTE1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    projectUrl: '#',
    tags: ['In Progress'],
    imageHint: 'under construction blueprint',
  },
];

// {
//   title: 'E-commerce Platform',
//   description: 'A full-featured e-commerce site with a custom backend, payment integration, and a sleek user interface.',
//   imageUrl: 'https://placehold.co/600x400.png',
//   projectUrl: '#',
//   tags: ['React', 'Node.js', 'Firebase'],
//   imageHint: 'online shopping',
// },
// {
//   title: 'Data Visualization Dashboard',
//   description: 'An interactive dashboard for visualizing complex datasets, helping users to derive insights easily.',
//   imageUrl: 'https://placehold.co/600x400.png',
//   projectUrl: '#',
//   tags: ['React', 'Data Viz', 'Dashboards'],
//   imageHint: 'charts graphs',
// },

export default function Projects() {
  return (
    <div className="relative w-full">
      <ThreeCanvas sceneType="contact" />
      <div className="relative z-10 space-y-8">
        <Card className="transform-gpu p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 md:p-12">
          <h1 className="font-headline text-5xl font-semibold italic md:text-6xl">My Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work.</p>
        </Card>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
