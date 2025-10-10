import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  isLoading: boolean
  connectionType: string
  isSlowConnection: boolean
  memoryUsage?: number
}

export const usePerformance = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLoading: true,
    connectionType: 'unknown',
    isSlowConnection: false,
  })

  useEffect(() => {
    const updateMetrics = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      
      const connectionType = connection?.effectiveType || 'unknown'
      const isSlowConnection = ['slow-2g', '2g', '3g'].includes(connectionType)
      
      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || undefined

      setMetrics({
        isLoading: false,
        connectionType,
        isSlowConnection,
        memoryUsage,
      })
    }

    // Update metrics on load
    updateMetrics()

    // Listen for connection changes
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    
    if (connection) {
      connection.addEventListener('change', updateMetrics)
      return () => connection.removeEventListener('change', updateMetrics)
    }
  }, [])

  return metrics
}

// Custom hook for lazy loading images
export const useLazyImage = (src: string, options?: IntersectionObserverInit) => {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!imageRef || imageSrc) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.unobserve(entry.target)
          }
        })
      },
      options
    )

    observer.observe(imageRef)

    return () => {
      if (imageRef) {
        observer.unobserve(imageRef)
      }
    }
  }, [imageRef, src, imageSrc, options])

  return [setImageRef, imageSrc] as const
}

// Hook for detecting reduced motion preference
export const useReducedMotion = (): boolean => {
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

// Hook for viewport size
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return viewport
}