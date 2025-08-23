'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
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
  const { isSignedIn } = useUser()
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

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

  const baseMenuItems = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      description: 'Chat with AI Assistant'
    },
    {
      href: '/blog',
      label: 'Blog',
      icon: BookOpen,
      description: 'Tips & guides for bookkeeping'
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
      href: '/faq',
      label: 'FAQ',
      icon: HelpCircle,
      description: 'Frequently asked questions'
    }
  ]

  const menuItems = baseMenuItems

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <div className={`absolute inset-0 transition-all duration-200 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
            <Menu className="w-6 h-6 text-neutral-700" />
          </div>
          <div className={`absolute inset-0 transition-all duration-200 ${isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
            <X className="w-6 h-6 text-neutral-700" />
          </div>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed left-0 top-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-neutral-100">
            <p className="text-sm text-neutral-600">Explore My AI Bookkeeper</p>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-secondary-100 text-secondary-700 shadow-sm'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  <div className={`flex-shrink-0 p-1 rounded-lg transition-colors ${
                    isActive ? 'bg-secondary-200' : 'group-hover:bg-neutral-100'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-neutral-500 truncate">{item.description}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-neutral-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">My AI Bookkeeper</h3>
                <p className="text-xs text-neutral-500">Your AI Bookkeeping Assistant</p>
              </div>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              © 2024 My AI Bookkeeper. Making bookkeeping accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}