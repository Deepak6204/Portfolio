import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ZXYN</h3>
            <p className="text-muted-foreground">
              Full Stack Developer & Problem Solver
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary">Projects</a></li>
              <li><a href="#coding" className="text-muted-foreground hover:text-primary">Coding Profiles</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ZXYN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}