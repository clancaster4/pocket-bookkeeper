'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  HelpCircle, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react'

interface MobileMenuProps {
  className?: string
}

export default function MobileMenu({ className = '' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when pathname changes (navigation)
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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      description: 'AI Bookkeeping Assistant'
    },
    {
      href: '/about',
      label: 'About',
      icon: Info,
      description: 'Learn about our mission'
    },
    {
      href: '/popular-uses',
      label: 'Popular Uses',
      icon: Sparkles,
      description: 'Common bookkeeping scenarios'
    },
    {
      href: '/support',
      label: 'Support',
      icon: HelpCircle,
      description: 'FAQ and help resources'
    }
  ]

  return (
    <div className={className}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        className="p-2 rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
      >
        {isOpen ? (
          <X className="w-5 h-5" aria-hidden="true" />
        ) : (
          <Menu className="w-5 h-5" aria-hidden="true" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-neutral-900">
              Pocket Bookkeeper
            </span>
          </div>
          <button
            onClick={toggleMenu}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
          >
            <X className="w-5 h-5 text-neutral-500" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6" role="navigation">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? 'bg-secondary-50 text-secondary-700 border border-secondary-200' 
                        : 'hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900'
                    }`}
                    onClick={toggleMenu}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-secondary-100 text-secondary-600' 
                        : 'bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200'
                    }`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">
                        {item.label}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neutral-200">
          <div className="text-center">
            <p className="text-sm text-neutral-600 mb-2">
              Get instant bookkeeping help
            </p>
            <Link
              href="/"
              onClick={toggleMenu}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Chatting</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation (Hidden on mobile) */}
      <nav className="hidden lg:flex items-center space-x-8" role="navigation">
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-secondary-600 ${
                isActive 
                  ? 'text-secondary-600 border-b-2 border-secondary-600 pb-1' 
                  : 'text-neutral-600'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}