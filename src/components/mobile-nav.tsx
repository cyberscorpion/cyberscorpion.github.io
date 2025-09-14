import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { List, User, Code, Envelope, FileText, House } from "@phosphor-icons/react"

interface MobileNavProps {
  currentPage: 'home' | 'resume'
  setCurrentPage: (page: 'home' | 'resume') => void
}

export function MobileNav({ currentPage, setCurrentPage }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const navigateToPage = (page: 'home' | 'resume') => {
    setCurrentPage(page)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <List size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-6 mt-8">
          {currentPage === 'home' ? (
            <>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-3 justify-start text-lg h-12"
              >
                <User size={20} />
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-3 justify-start text-lg h-12"
              >
                <Code size={20} />
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-3 justify-start text-lg h-12"
              >
                <Envelope size={20} />
                Contact
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigateToPage('resume')}
                className="flex items-center gap-3 justify-start text-lg h-12"
              >
                <FileText size={20} />
                Web Resume
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={() => navigateToPage('home')}
                className="flex items-center gap-3 justify-start text-lg h-12"
              >
                <House size={20} />
                Home
              </Button>
              <Button
                variant="default"
                className="flex items-center gap-3 justify-start text-lg h-12 cursor-default"
              >
                <FileText size={20} />
                Web Resume
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}