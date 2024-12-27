import { Card, CardContent } from '@/components/ui/card';
import { Code2, Brain, Rocket } from 'lucide-react';
import personalData from '@/data/personal.json';

const icons = {
  Code2,
  Brain,
  Rocket,
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalData.about.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}