import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'work':
        return <Work onNavigate={handleNavigate} />;
      case 'process':
        return <Process onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="pt-24">
        {renderCurrentPage()}
      </main>
      <Toaster />
      
      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-xl tracking-tight mb-2">Alex Chen</div>
              <p className="text-muted-foreground text-sm">
                UX Design Leader • Systematic Thinking • Strategic Execution
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <a 
                href="mailto:alex@alexchen.design"
                className="hover:text-muted-foreground transition-colors"
              >
                alex@alexchen.design
              </a>
              <a 
                href="https://linkedin.com/in/alexchen-design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                LinkedIn
              </a>
              <button
                onClick={() => handleNavigate('work')}
                className="hover:text-muted-foreground transition-colors text-left"
              >
                Case Studies
              </button>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Alex Chen. Designed and built with systematic thinking.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}