// Client-side fingerprinting for consistent user tracking across mobile devices
export function getClientFingerprint(): string {
  if (typeof window === 'undefined') return 'server-side'
  
  try {
    // Try to get existing fingerprint from localStorage first
    const stored = localStorage.getItem('client-fingerprint')
    if (stored) {
      console.log('Using stored fingerprint:', stored)
      return stored
    }

    console.log('Generating new fingerprint...')

    // Check if we're on mobile to use a simpler fingerprinting method
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    let fingerprintData: string[]
    
    if (isMobile) {
      // Simpler fingerprinting for mobile devices (avoid canvas issues)
      fingerprintData = [
        'mobile_device',
        navigator.userAgent.substring(0, 50), // First 50 chars of user agent
        screen.width.toString(),
        screen.height.toString(),
        new Date().getTimezoneOffset().toString(),
        navigator.language || 'unknown',
        (navigator.hardwareConcurrency || 1).toString(),
        (screen.pixelRatio || 1).toString()
      ]
      console.log('Mobile device detected, using simplified fingerprinting')
    } else {
      // Full fingerprinting for desktop
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      let canvasFingerprint = 'no_canvas'
      
      if (ctx) {
        ctx.textBaseline = 'top'
        ctx.font = '14px Arial'
        ctx.fillText('Browser fingerprint', 2, 2)
        canvasFingerprint = canvas.toDataURL().slice(-50)
      }
      
      fingerprintData = [
        canvasFingerprint,
        navigator.userAgent.length.toString(),
        screen.width.toString(),
        screen.height.toString(),
        new Date().getTimezoneOffset().toString(),
        navigator.language || 'unknown',
        (navigator.hardwareConcurrency || 1).toString()
      ]
      console.log('Desktop device detected, using full fingerprinting')
    }
    
    const fingerprint = fingerprintData.join('|')
    const encoded = btoa(fingerprint).replace(/[^a-zA-Z0-9]/g, '').substring(0, 20)
    
    console.log('Generated fingerprint:', encoded)
    
    // Store in localStorage for consistency
    localStorage.setItem('client-fingerprint', encoded)
    
    return encoded
  } catch (error) {
    console.warn('Error generating client fingerprint:', error)
    // Fallback to a simple identifier
    const fallback = btoa((navigator.userAgent + screen.width + screen.height + Date.now()).toString()).replace(/[^a-zA-Z0-9]/g, '').substring(0, 20)
    console.log('Using fallback fingerprint:', fallback)
    localStorage.setItem('client-fingerprint', fallback)
    return fallback
  }
}