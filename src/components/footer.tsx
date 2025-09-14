import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowUp, Heart } from "@phosphor-icons/react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Rajat Jain</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer passionate about building innovative solutions 
              and contributing to the tech community.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <div className="space-y-4">
              <a 
                href="#about"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                About
              </a>
              <a 
                href="#projects"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Projects
              </a>
              <a 
                href="#contact"
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://linkedin.com/in/rajatjain-cs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/cyberscorpion"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linktr.ee/RajatJain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Linktree
              </a>
              <a 
                href="mailto:codense.in@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Rajat Jain. Built with <Heart size={16} className="text-red-500" /> and React.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <ArrowUp size={16} />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}