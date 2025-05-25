/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		spacing: {
  			0.5: '2px',
  			1: '4px',
  			2: '8px',
  			3: '12px',
  			4: '16px',
  			5: '20px',
  			6: '24px',
  			8: '32px',
  			10: '40px',
  			12: '48px',
  			16: '64px',
  			20: '80px',
  			24: '96px',
  			32: '128px',
  			40: '160px',
  			'touch-sm': '44px',
  			'touch-md': '48px',
  			'touch-lg': '56px',
  			'touch-xl': '64px',
  		},
  		maxWidth: {
  			'mobile': '320px',
  			'tablet': '768px',
  			'desktop': '1280px',
  			'wide': '1600px',
  			'prose': '65ch',
  			'prose-sm': '45ch',
  			'prose-lg': '75ch',
  		},
  		screens: {
  			'xs': '320px',
  			'sm': '480px',
  			'md': '768px',
  			'lg': '1024px',
  			'xl': '1280px',
  			'2xl': '1600px',
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				50: '#faf5ff',
  				100: '#f3e8ff',
  				200: '#e9d5ff',
  				300: '#d8b4fe',
  				400: '#c084fc',
  				500: '#a855f7',
  				600: '#9333ea',
  				700: '#7c3aed',
  				800: '#6b21a8',
  				900: '#581c87',
  				DEFAULT: '#a855f7',
  				foreground: '#faf5ff',
  			},
  			secondary: {
  				50: '#eff6ff',
  				100: '#dbeafe',
  				200: '#bfdbfe',
  				300: '#93c5fd',
  				400: '#60a5fa',
  				500: '#3b82f6',
  				600: '#2563eb',
  				700: '#1d4ed8',
  				800: '#1e40af',
  				900: '#1e3a8a',
  				DEFAULT: '#3b82f6',
  				foreground: '#eff6ff',
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			realEstate: {
  				sold: '#22c55e',
  				pending: '#f59e0b',
  				available: '#a855f7',
  				rent: '#8b5cf6',
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			'xs': ['0.75rem', { lineHeight: '1rem' }],
  			'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  			'base': ['1rem', { lineHeight: '1.5rem' }],
  			'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  			'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  		},
  		transitionDuration: {
  			'fast': '150ms',
  			'normal': '250ms',
  			'slow': '350ms',
  		},
  		ringWidth: {
  			'focus': '2px',
  		},
  		ringOffsetWidth: {
  			'focus': '2px',
  		},
  		zIndex: {
  			'dropdown': '1000',
  			'sticky': '1020',
  			'fixed': '1030',
  			'modal-backdrop': '1040',
  			'modal': '1050',
  			'popover': '1060',
  			'tooltip': '1070',
  			'toast': '1080',
  			'maximum': '9999',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} 