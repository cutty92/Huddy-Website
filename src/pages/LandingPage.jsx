import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome to Huddy</h2>
      <p className="mb-6">This site hosts a small hub that embeds the JSON builder tool. The JSON builder lets you visually create and edit JSON structures used by Huddy projects.</p>
      <Link to="/app" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Open JSON Builder App</Link>
    </div>
  )
}
