import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 p-4">
      <div className="container mx-auto text-center">
        <small>© {new Date().getFullYear()} Huddy — Built with React + Vite</small>
      </div>
    </footer>
  )
}
