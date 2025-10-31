import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Huddy</h1>
        <nav>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
          <Link to="/app" className="hover:underline">App</Link>
        </nav>
      </div>
    </header>
  )
}
