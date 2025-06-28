'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  animatedImageUrl?: string;
  projectUrl: string;
  tags: string[];
  imageHint: string;
};

export function ProjectCard({ title, description, imageUrl, animatedImageUrl, projectUrl, tags, imageHint }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="flex h-full flex-col transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 rounded-t-2xl overflow-hidden">
        <div className="relative w-full aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
          {animatedImageUrl && (
            <Image
              src={animatedImageUrl}
              alt={title}
              fill
              className={cn(
                "object-cover transition-opacity duration-300 ease-in-out",
                isHovered ? "opacity-100" : "opacity-0"
              )}
              data-ai-hint={imageHint}
              unoptimized
            />
          )}
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
