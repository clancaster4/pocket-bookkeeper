'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Info, 
  HelpCircle, 
  BookOpen,
  Home,
  ChevronRight,
  Sparkles
} from 'lucide-react'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      description: 'Chat with AI Assistant'
    },
    {
      href: '/about',
      label: 'About',
      icon: Info,
      description: 'Learn about our mission'
    },
    {
      href: '/how-to-use',
      label: 'How to Use',
      icon: BookOpen,
      description: 'Examples & best practices'
    },
    {
      href: '/support',
      label: 'Support',
      icon: HelpCircle,
      description: 'Get help & contact us'
    }
  ]

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-neutral-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-neutral-700" />
        ) : (
          <Menu className="w-6 h-6 text-neutral-700" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-45 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-neutral-200">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-neutral-900">Navigation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>
            <p className="text-sm text-neutral-600">Explore Pocket Bookkeeper</p>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-start space-x-3 p-4 rounded-xl transition-all duration-200 group ${
                        isActive 
                          ? 'bg-gradient-to-r from-secondary-50 to-accent-50 border border-secondary-200' 
                          : 'hover:bg-neutral-50 border border-transparent'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive 
                          ? 'bg-gradient-to-r from-secondary-500 to-secondary-600' 
                          : 'bg-neutral-100 group-hover:bg-neutral-200'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          isActive ? 'text-white' : 'text-neutral-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold ${
                            isActive ? 'text-secondary-700' : 'text-neutral-900'
                          }`}>
                            {item.label}
                          </h3>
                          <ChevronRight className={`w-4 h-4 ${
                            isActive ? 'text-secondary-500' : 'text-neutral-400'
                          } group-hover:translate-x-1 transition-transform`} />
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-neutral-200 bg-gradient-to-r from-secondary-50 to-accent-50">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">Pocket Bookkeeper</h3>
                <p className="text-xs text-neutral-600">AI-Powered Assistant</p>
              </div>
            </div>
            <p className="text-xs text-neutral-500">
              © 2024 Pocket Bookkeeper. Making bookkeeping accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}