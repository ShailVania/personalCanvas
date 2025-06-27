import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  imageHint: string;
};

export function ProjectCard({ title, description, imageUrl, projectUrl, tags, imageHint }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
      <CardHeader className="p-0 rounded-t-2xl overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle>{title}</CardTitle>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Button asChild variant="default" className="w-full">
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            View Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
