import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        'caribbean-current': { DEFAULT: '#006466', 100: '#001414', 200: '#002829', 300: '#003c3d', 400: '#005052', 500: '#006466', 600: '#00b5b8', 700: '#0afbff', 800: '#5cfcff', 900: '#adfeff' },
        'midnight-green': { DEFAULT: '#144552', 100: '#040e10', 200: '#081b21', 300: '#0c2931', 400: '#103742', 500: '#144552', 600: '#247c94', 700: '#3aafcf', 800: '#7ccadf', 900: '#bde4ef' },
        'charcoal': { DEFAULT: '#1b3a4b', 100: '#050c0f', 200: '#0b171e', 300: '#10232d', 400: '#162f3c', 500: '#1b3a4b', 600: '#316987', 700: '#4b96be', 800: '#87b9d4', 900: '#c3dce9' },
        'prussian-blue': { DEFAULT: '#212f45', 100: '#07090e', 200: '#0d131c', 300: '#141c29', 400: '#1b2537', 500: '#212f45', 600: '#3c547c', 700: '#5a7baf', 800: '#91a7ca', 900: '#c8d3e4' },
        'space-cadet': { DEFAULT: '#272640', 100: '#08080d', 200: '#100f1a', 300: '#171726', 400: '#1f1f33', 500: '#272640', 600: '#464573', 700: '#6866a3', 800: '#9a99c2', 900: '#cdcce0' },
        'dark-purple': { DEFAULT: '#3e1f47', 100: '#0c060e', 200: '#190c1c', 300: '#25132b', 400: '#321939', 500: '#3e1f47', 600: '#703880', 700: '#a055b4', 800: '#bf8ecd', 900: '#dfc6e6' },
        'palatinate': { DEFAULT: '#4d194d', 100: '#0f050f', 200: '#1f0a1f', 300: '#2e0f2e', 400: '#3e143e', 500: '#4d194d', 600: '#8b2d8b', 700: '#c346c3', 800: '#d784d7', 900: '#ebc1eb' }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
