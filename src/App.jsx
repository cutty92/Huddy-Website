import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import AppEmbed from './pages/AppEmbed'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<AppEmbed />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
