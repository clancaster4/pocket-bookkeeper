// Client-side fingerprinting for consistent user tracking across mobile devices
export function getClientFingerprint(): string {
  if (typeof window === 'undefined') return 'server-side'
  
  try {
    // Try to get existing fingerprint from localStorage first
    const stored = localStorage.getItem('client-fingerprint')
    if (stored) {
      return stored
    }

    // Generate new fingerprint
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.textBaseline = 'top'
      ctx.font = '14px Arial'
      ctx.fillText('Browser fingerprint', 2, 2)
    }
    
    const fingerprint = [
      canvas.toDataURL().slice(-50),
      navigator.userAgent.length.toString(),
      screen.width.toString(),
      screen.height.toString(),
      new Date().getTimezoneOffset().toString(),
      navigator.language || 'unknown',
      (navigator.hardwareConcurrency || 1).toString()
    ].join('|')
    
    const encoded = btoa(fingerprint).replace(/[^a-zA-Z0-9]/g, '').substring(0, 20)
    
    // Store in localStorage for consistency
    localStorage.setItem('client-fingerprint', encoded)
    
    return encoded
  } catch (error) {
    console.warn('Error generating client fingerprint:', error)
    // Fallback to a simple identifier
    const fallback = btoa(navigator.userAgent + screen.width + screen.height).replace(/[^a-zA-Z0-9]/g, '').substring(0, 20)
    localStorage.setItem('client-fingerprint', fallback)
    return fallback
  }
}