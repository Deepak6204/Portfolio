import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Deepak Yadav</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#projects" className="hover:text-primary">Projects</a>
              <a href="#coding" className="hover:text-primary">Coding</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="ml-4"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block hover:text-primary py-2">About</a>
            <a href="#projects" className="block hover:text-primary py-2">Projects</a>
            <a href="#coding" className="block hover:text-primary py-2">Coding</a>
            <a href="#contact" className="block hover:text-primary py-2">Contact</a>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-full justify-start"
            >
              {theme === 'dark' ? (
                <><Sun className="h-5 w-5 mr-2" /> Light Mode</>
              ) : (
                <><Moon className="h-5 w-5 mr-2" /> Dark Mode</>
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}