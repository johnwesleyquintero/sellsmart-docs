
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				// SellSmart Design System Colors
				"brand": {
					DEFAULT: "#2D5BFF", // Primary Blue
					50: "#E6EBFF",
					100: "#C1CDFF",
					200: "#99ACFF", 
					300: "#748BFF",
					400: "#506DFF",
					500: "#2D5BFF", // Primary
					600: "#0039FF",
					700: "#002ED4",
					800: "#0023A1",
					900: "#001A7A",
				},
				"accent": {
					DEFAULT: "#00C9A7", // Secondary Teal
					50: "#E6FFF9",
					100: "#B3FFF0",
					200: "#80FFE6",
					300: "#4DFFDC",
					400: "#1AFFD2",
					500: "#00E6C0",
					600: "#00C9A7", // Secondary
					700: "#009D82",
					800: "#00705D",
					900: "#004438",
				},
				"neutral": {
					DEFAULT: "#1A1D26", // Dark Theme Base
					50: "#E6E7E9",
					100: "#C1C3C9",
					200: "#9B9EA9",
					300: "#757989",
					400: "#4F5468",
					500: "#363B4D",
					600: "#2D3250", // Surface
					700: "#232741",
					800: "#1A1D32",
					900: "#1A1D26", // Neutral
				},
				"error": "#FF4D4D",
				"success": "#00CC88",
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
				mono: ["Lato", "ui-monospace", "monospace"],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				"component": "6px", // Component radius from design tokens
			},
			boxShadow: {
				"card": "0 2px 8px rgba(0,0,0,0.1)", // Card elevation from design tokens
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
