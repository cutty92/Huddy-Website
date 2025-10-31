# Huddy Website

This is a small Vite + React site that embeds the existing Huddy JSON Builder app in an iframe.

Quick start (Windows PowerShell):

```powershell
cd "C:\Users\charl\Documents\huddy website"
npm install
npm run dev
```

If you prefer the original project path mentioned earlier, replace the `cd` target with your desired path (for example `C:/GIT/Huddy-Website`).

Notes
- The embedded app URL is set in `src/pages/AppEmbed.jsx` (default: `https://huddy-web.vercel.app`). Update that constant after you deploy the Huddy-Web app to Vercel.
- You can also provide a Vite environment variable `VITE_HUDDY_WEB_URL` and modify `AppEmbed.jsx` to read `import.meta.env.VITE_HUDDY_WEB_URL` if you prefer not to edit source files.

Features
- React Router for navigation between `/` (Landing page) and `/app` (embedded app)
- Tailwind CSS for styling

Optional
- `AppEmbed.jsx` includes a simple load timeout and fallback message if the iframe does not load within ~8s.
