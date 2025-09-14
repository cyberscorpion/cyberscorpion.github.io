import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const processedElements = useRef<Set<Element>>(new Set())

  const initializeObserver = () => {
    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            // Mark as processed so we don't reset it
            processedElements.current.add(entry.target)
          }
        })
      },
      {
        threshold: 0.05, // Lower threshold to trigger earlier
        rootMargin: '0px 0px -20px 0px', // Reduced margin
      }
    )

    // Observe all elements with the animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => {
      // Only reset animation if not already processed and not explicitly marked as visible
      if (!processedElements.current.has(el) && !el.classList.contains('opacity-100')) {
        el.classList.remove('animate-in')
      }
      
      // Always observe for future scroll interactions
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })
  }

  useEffect(() => {
    // Use requestAnimationFrame for better timing
    const rafId = requestAnimationFrame(() => {
      setTimeout(initializeObserver, 100) // Slightly longer delay
    })
    
    // Listen for reinitialize events
    const handleReinitialize = () => {
      // Clear processed elements on page change
      processedElements.current.clear()
      setTimeout(initializeObserver, 150)
    }

    window.addEventListener('reinitializeScrollAnimations', handleReinitialize)
    
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('reinitializeScrollAnimations', handleReinitialize)
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [])

  // Re-initialize observer when new content is added (e.g., route changes)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Debounce the re-initialization
      setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll:not(.animate-in)')
        elements.forEach((el) => {
          if (observerRef.current && !processedElements.current.has(el) && !el.classList.contains('opacity-100')) {
            observerRef.current.observe(el)
          }
        })
      }, 100)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])
}