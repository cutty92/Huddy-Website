import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <main className="min-h-[calc(100vh-120px)] text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Huddy — Nerdy HUD for your rig</h2>
            <p className="mt-4 text-lg text-white/80">Monitor FPS, temps, and system load with a lightweight overlay built for gamers and hardware tinkerers. Minimal, performant, and beautifully nerdy.</p>
            <div className="mt-6 flex gap-4">
              <Link to="/app" className="inline-flex items-center bg-huddy-green text-huddy-900 px-5 py-3 rounded-md font-semibold shadow-lg hover:brightness-105">Open App</Link>
              <a href="#screens" className="inline-flex items-center border border-white/10 px-5 py-3 rounded-md text-white/80 hover:text-white">Screenshots</a>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="glass p-4 rounded-lg">
              <div className="bg-huddy-800 p-6 rounded">
                <div className="text-sm text-white/60">Live Preview</div>
                <div className="mt-4 bg-black/50 h-48 rounded flex items-center justify-center text-white/40">HUD Preview Area</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / Screenshot parallax area */}
      <section id="screens" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-display font-bold mb-8">Screenshots</h3>

          <div className="space-y-24">
            {/* One parallax row (image left, text right) */}
            <div className="md:flex md:items-center md:gap-8">
              <div className="md:w-1/2">
                <div className="parallax-img bg-gradient-to-tr from-huddy-700 to-huddy-800 rounded-lg h-64 flex items-center justify-center text-white/40">Screenshot Placeholder</div>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="bg-huddy-800 p-6 rounded-lg glass">
                  <h4 className="font-display text-xl">On-screen Stats</h4>
                  <p className="mt-3 text-white/80">Pin essential system metrics to your screen and keep playing — low overhead, high visibility.</p>
                </div>
              </div>
            </div>

            {/* Reverse split (text left, image right) */}
            <div className="md:flex md:items-center md:gap-8 md:flex-row-reverse">
              <div className="md:w-1/2">
                <div className="parallax-img bg-gradient-to-tr from-huddy-700 to-huddy-800 rounded-lg h-64 flex items-center justify-center text-white/40">Screenshot Placeholder</div>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="bg-huddy-800 p-6 rounded-lg glass">
                  <h4 className="font-display text-xl">Customizable Layouts</h4>
                  <p className="mt-3 text-white/80">Arrange modules, change color accents, and set thresholds to be notified when temps climb.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
