/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        // Soft monochrome palette
        neutral: {
          50: '#faf9f7',
          100: '#f2f0ed',
          200: '#e9e6e2',
          300: '#d8d4cf',
          400: '#b5b0a9',
          500: '#8c867e',
          600: '#6b665f',
          700: '#57534e',
          800: '#3a3631',
          900: '#1c1917',
        },
        // Warm accent colors
        beige: {
          50: '#faf8f5',
          100: '#f3f0e9',
          200: '#e9e2d7',
          300: '#d9cdba',
          400: '#c4b195',
          500: '#b59a75',
          600: '#a78a62',
          700: '#8c7150',
          800: '#735d45',
          900: '#5e4d3b',
        },
        olive: {
          50: '#f8f8f4',
          100: '#f0f0e6',
          200: '#e0e0cc',
          300: '#c9c9a8',
          400: '#acae7f',
          500: '#90945d',
          600: '#767a48',
          700: '#5b5f39',
          800: '#4a4d2f',
          900: '#3e4128',
        },
        salmon: {
          50: '#fef8f7',
          100: '#fef1ef',
          200: '#fce0dc',
          300: '#f9c7c0',
          400: '#f4a295',
          500: '#ed7a68',
          600: '#d45e4b',
          700: '#b24b3b',
          800: '#944033',
          900: '#7b382d',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
