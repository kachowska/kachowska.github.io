// PWA utilities
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('ServiceWorker registration successful:', registration)
      
      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, inform user
              showUpdateAvailable()
            }
          })
        }
      })
    } catch (error) {
      console.log('ServiceWorker registration failed:', error)
    }
  }
}

export const showUpdateAvailable = () => {
  // You can implement a toast notification here
  if (confirm('A new version of the app is available. Would you like to reload?')) {
    window.location.reload()
  }
}

// Install PWA prompt
let deferredPrompt: any = null

export const initializePWAPrompt = () => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    
    // Show install button
    const installButton = document.getElementById('pwa-install-button')
    if (installButton) {
      installButton.style.display = 'block'
    }
  })
}

export const installPWA = async () => {
  if (!deferredPrompt) return
  
  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  
  if (outcome === 'accepted') {
    console.log('User accepted the PWA install prompt')
  }
  
  deferredPrompt = null
}

// Network status utilities
export const getNetworkStatus = (): boolean => {
  return navigator.onLine
}

export const onNetworkChange = (callback: (isOnline: boolean) => void) => {
  const handleOnline = () => callback(true)
  const handleOffline = () => callback(false)
  
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)
  
  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
  }
}

// Performance utilities
export const preloadImages = (imageSrcs: string[]) => {
  imageSrcs.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

export const preloadRoute = (route: string) => {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = route
  document.head.appendChild(link)
}

// Analytics utilities
export const trackPageView = (page: string) => {
  if (typeof (window as any).gtag !== 'undefined') {
    ;(window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: page,
    })
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof (window as any).gtag !== 'undefined') {
    ;(window as any).gtag('event', eventName, parameters)
  }
}