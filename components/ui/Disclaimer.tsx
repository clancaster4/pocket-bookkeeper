import { Shield, AlertTriangle } from 'lucide-react'

export default function Disclaimer() {
  return (
    <footer className="relative mt-6">
      <div className="glass-card mx-4 mb-4 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Shield className="h-4 w-4 text-accent-500" />
            <span className="text-sm font-semibold text-neutral-700">Legal Notice</span>
          </div>
          <p className="text-center text-xs text-neutral-600 leading-relaxed">
            <strong>Disclaimer:</strong> This AI assistant provides general guidance based on standard accounting principles. 
            It is not a substitute for professional accounting, legal, or tax advice. 
            Always consult with qualified professionals for your specific situation.
          </p>
        </div>
      </div>
    </footer>
  )
} 