import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code2, Smartphone, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';
import projectsData from '@/data/projects.json';

const icons = {
  Code2,
  Smartphone,
  Bot,
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projectsData.projects.filter(project => project.category === selectedCategory)
    : projectsData.projects;

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All Projects
          </Button>
          {projectsData.categories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons];
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-2",
                  selectedCategory === category.id && "bg-primary text-primary-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48"
                style={{ objectFit: 'cover' }}
                fallback="https://images.unsplash.com/photo-1618477388954-7852f32655ec"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}