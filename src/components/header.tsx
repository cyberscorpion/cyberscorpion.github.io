import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { User, Code, Envelope, FileText, House } from "@phosphor-icons/react"

interface HeaderProps {
  currentPage: 'home' | 'resume'
  setCurrentPage: (page: 'home' | 'resume') => void
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border navbar">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
        <div 
          className="font-bold text-xl cursor-pointer hover:text-primary transition-colors"
          onClick={() => setCurrentPage('home')}
        >
          Rajat Jain
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {currentPage === 'home' ? (
            <>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2"
              >
                <User size={18} />
                About
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2"
              >
                <Code size={18} />
                Projects
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2"
              >
                <Envelope size={18} />
                Contact
              </Button>
              <Button 
                variant="ghost"
                onClick={() => setCurrentPage('resume')}
                className="flex items-center gap-2"
              >
                <FileText size={18} />
                Web Resume
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost"
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-2"
              >
                <House size={18} />
                Home
              </Button>
              <Button 
                variant="default"
                className="flex items-center gap-2 cursor-default"
              >
                <FileText size={18} />
                Web Resume
              </Button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </header>
  )
}