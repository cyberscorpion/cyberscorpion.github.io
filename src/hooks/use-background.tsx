import { useState, useEffect, createContext, useContext } from 'react'

type BackgroundType = 'mesh' | 'particles' | 'video' | 'none'

interface BackgroundContextType {
  backgroundType: BackgroundType
  setBackgroundType: (type: BackgroundType) => void
  isAnimated: boolean
  setIsAnimated: (animated: boolean) => void
  opacity: number
  setOpacity: (opacity: number) => void
  particleCount: number
  setParticleCount: (count: number) => void
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('mesh')
  const [isAnimated, setIsAnimated] = useState(true)
  const [opacity, setOpacity] = useState(70)
  const [particleCount, setParticleCount] = useState(50)

  // Save preferences to localStorage
  useEffect(() => {
    const savedPrefs = localStorage.getItem('background-preferences')
    if (savedPrefs) {
      try {
        const prefs = JSON.parse(savedPrefs)
        setBackgroundType(prefs.backgroundType || 'mesh')
        setIsAnimated(prefs.isAnimated !== false)
        setOpacity(prefs.opacity || 70)
        setParticleCount(prefs.particleCount || 50)
      } catch (error) {
        console.log('Failed to load background preferences:', error)
      }
    }
  }, [])

  useEffect(() => {
    const prefs = {
      backgroundType,
      isAnimated,
      opacity,
      particleCount
    }
    localStorage.setItem('background-preferences', JSON.stringify(prefs))
  }, [backgroundType, isAnimated, opacity, particleCount])

  return (
    <BackgroundContext.Provider value={{
      backgroundType,
      setBackgroundType,
      isAnimated,
      setIsAnimated,
      opacity,
      setOpacity,
      particleCount,
      setParticleCount
    }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  const context = useContext(BackgroundContext)
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider')
  }
  return context
}

// Hook for reduced motion support
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}