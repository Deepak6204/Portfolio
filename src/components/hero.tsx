import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAnimatedName } from '@/hooks/useAnimatedName';
import personalData from '@/data/personal.json';

export default function Hero() {
  const animatedName = useAnimatedName(personalData.name);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-500">{animatedName}</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-muted-foreground">
          {personalData.title}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
}