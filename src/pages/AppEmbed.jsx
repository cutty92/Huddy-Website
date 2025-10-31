import React, { useState, useEffect, useRef } from 'react'

// Placeholder URL — update this to the deployed Huddy-Web URL after Vercel deploy
const DEFAULT_IFRAME_URL = 'https://huddy-web.vercel.app'

export default function AppEmbed() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const iframeRef = useRef(null)
  const url = DEFAULT_IFRAME_URL

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loaded) setFailed(true)
    }, 8000)
    return () => clearTimeout(timeout)
  }, [loaded])

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-white">
      {failed && (
        <div className="p-6 text-center">
          <p className="text-red-600 mb-4">Unable to load the embedded app. Please check the URL or your network.</p>
          <p className="text-sm">Current iframe URL: <code className="break-all">{url}</code></p>
          <p className="mt-4 text-sm">To update the URL after deployment, edit <code>src/pages/AppEmbed.jsx</code> or set a Vite env variable (see README).</p>
        </div>
      )}

      <iframe
        ref={iframeRef}
        title="Huddy JSON Builder"
        src={url}
        onLoad={() => setLoaded(true)}
        className="w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  )
}
