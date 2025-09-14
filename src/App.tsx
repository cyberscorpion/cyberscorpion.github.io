import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero" 
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WebResume } from "@/components/web-resume"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTheme } from "@/hooks/use-theme"

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'resume'>('home')
  const [scrollPositions, setScrollPositions] = useState<{
    home: number
    resume: number
  }>({
    home: 0,
    resume: 0
  })
  
  // Initialize theme system
  useTheme()
  
  // Initialize scroll animations
  useScrollAnimation()

  // Save current scroll position when changing pages
  const handlePageChange = (newPage: 'home' | 'resume') => {
    // Save current scroll position
    const currentScrollY = window.scrollY
    setScrollPositions(prev => ({
      ...prev,
      [currentPage]: currentScrollY
    }))
    
    // Change page
    setCurrentPage(newPage)
  }

  // Restore scroll position when page changes
  useEffect(() => {
    // Small delay to allow DOM to update, then restore scroll position
    const timer = setTimeout(() => {
      window.scrollTo(0, scrollPositions[currentPage])
      // Trigger a custom event to reinitialize scroll animations
      window.dispatchEvent(new CustomEvent('reinitializeScrollAnimations'))
    }, 100)

    return () => clearTimeout(timer)
  }, [currentPage, scrollPositions])

  // Ensure body has proper classes
  useEffect(() => {
    document.body.className = "min-h-screen bg-background text-foreground"
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'resume':
        return <WebResume onBackToHome={() => handlePageChange('home')} />
      default:
        return (
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth relative">
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
      {renderPage()}
      {currentPage !== 'resume' && <Footer />}
    </div>
  )
}

export default App