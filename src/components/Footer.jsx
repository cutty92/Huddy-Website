import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-huddy-800 text-huddy-accent py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        <div className="mb-2">© {new Date().getFullYear()} Huddy — Nerdy HUD for your PC</div>
        <div className="text-xs text-white/60">Built with ❤️ for gamers, devs and hardware nerds.</div>
      </div>
    </footer>
  )
}
