import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import CodingProfiles from '@/components/coding-profiles';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;