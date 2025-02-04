'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Process', href: '/process' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export function Nav() {
  return (
    <header className="py-6 px-4 md:px-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
            T
          </div>
          <span className="text-xl font-bold">Tharanya</span>
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ y: -2 }}>
              <Link 
                href={item.href} 
                className={`text-gray-800 hover:text-purple-600 transition-colors ${
                  item.name === 'Contact' ? 'bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 hover:text-white' : ''
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
