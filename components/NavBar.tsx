'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Calculator, Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-md shadow-secondary-500/25">
              <Calculator className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-neutral-900">Pocket Bookkeeper</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/how-to-use" className="text-neutral-700 hover:text-neutral-900 transition-colors">How to Use</Link>
            <Link href="/pricing" className="text-neutral-700 hover:text-neutral-900 transition-colors">Pricing</Link>
            <Link href="/support" className="text-neutral-700 hover:text-neutral-900 transition-colors">Support</Link>
            <div className="h-6 w-px bg-neutral-200" />
            <Link href="/sign-in" className="text-neutral-700 hover:text-neutral-900 transition-colors">Sign In</Link>
            <Link
              href="/?openSubscription=true"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-secondary-500"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link href="/how-to-use" onClick={closeMenu} className="block px-3 py-2 rounded-md text-neutral-800 hover:bg-neutral-100">How to Use</Link>
            <Link href="/pricing" onClick={closeMenu} className="block px-3 py-2 rounded-md text-neutral-800 hover:bg-neutral-100">Pricing</Link>
            <Link href="/support" onClick={closeMenu} className="block px-3 py-2 rounded-md text-neutral-800 hover:bg-neutral-100">Support</Link>
            <div className="h-px bg-neutral-200 my-2" />
            <Link href="/sign-in" onClick={closeMenu} className="block px-3 py-2 rounded-md text-neutral-800 hover:bg-neutral-100">Sign In</Link>
            <Link href="/?openSubscription=true" onClick={closeMenu} className="block px-3 py-2 rounded-md text-white bg-gradient-to-r from-secondary-500 to-secondary-600 text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  )
}