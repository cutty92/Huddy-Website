module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'huddy-900': '#07140a', // very dark green
        'huddy-800': '#0b1f12',
        'huddy-700': '#0f2b19',
        'huddy-green': '#17c964',
        'huddy-green-200': '#7ef0b0',
        'huddy-accent': '#bfffd6'
      },
      fontFamily: {
        display: ['Orbitron', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
