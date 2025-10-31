import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-huddy-900 text-huddy-accent">
      <div className="container mx-auto px-6 py-4 flex justify-center">
        <div className="w-full max-w-4xl flex items-center justify-center">
          <h1 className="text-2xl font-display font-bold tracking-wider mr-8">Huddy</h1>
          <nav className="space-x-6 text-sm">
            <Link to="/" className="hover:text-white/90">Home</Link>
            <Link to="/app" className="hover:text-white/90">App</Link>
            <a href="#features" className="hover:text-white/90">Features</a>
            <a href="#screens" className="hover:text-white/90">Screenshots</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
