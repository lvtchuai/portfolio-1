export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f7f7f8',
          100: '#ececec',
          200: '#c5c5c6',
          300: '#8e8e91',
          400: '#636366',
          500: '#48484a',
          600: '#3e3e40',
          700: '#333335',
          800: '#2b2b2d',
          900: '#090909',
          950: '#050505',
        },
        accent: {
          orange: '#e96e36',
          blue: '#377aff',
          purple: '#8b5cf6',
          teal: '#14b8a6',
          emerald: '#10b981',
          rose: '#f43f5e',
        },
      },
      fontFamily: {
        sans: ['Instrument Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-sm': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '0.95' }],
        'display-md': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.95' }],
        'display-lg': ['clamp(4rem, 10vw, 8rem)', { lineHeight: '0.9' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, rgba(233, 110, 54, 0.15) 0%, rgba(55, 122, 255, 0.1) 50%, rgba(139, 92, 246, 0.15) 100%)',
        'glow-orange': 'radial-gradient(circle at center, rgba(233, 110, 54, 0.4) 0%, transparent 70%)',
        'glow-blue': 'radial-gradient(circle at center, rgba(55, 122, 255, 0.4) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(233, 110, 54, 0.3)',
        'glow-blue': '0 0 40px -10px rgba(55, 122, 255, 0.3)',
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
        'floating': '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'marquee': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(233, 110, 54, 0.3)' },
          '50%': { boxShadow: '0 0 40px -5px rgba(233, 110, 54, 0.5)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}