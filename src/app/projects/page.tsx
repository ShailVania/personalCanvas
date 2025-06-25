import { ProjectCard } from '@/components/project-card';

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
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold">My Projects</h1>
        <p className="mt-2 text-lg text-muted-foreground">A selection of my work.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
