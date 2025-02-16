import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/content/**/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			screens: {
				xs: '576px',
				sm: '768px',
				md: '992px',
				lg: '1200px',
				xl: '1400px',
				xxl: '1800px',
				xxxl: '1900px'
			},
			maxWidth: {
				xs: '540px',
				sm: '720px',
				md: '960px',
				lg: '1140px',
				xl: '1320px',
				xxl: '1750px',
				xxxl: '1850px'
			},
			colors: {
				'black-primary': "#121212",
				'black-2': '#555555',
				'black-3': "#1C1C1C",
				'secondary-2': '#ffffffab',
				'white-2': "#999999",
				'white-3': "#FBF9F9",
				'white-4': "#FDFAF8",
				'border-2': '#12121214',
				'mint-green': '#d8e9e4',
				'off-white': "#f9f3ee",
				'soft-pink': "#f4e0e0",
				'pink-border': "#C3B4B4",
				'yellow-2': "#FEDA1F",
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				primary: ["Kanit", "sans-serif"],
				getaway: ['getaway', 'sans-serif'],
				instrument: ['Instrument Sans', 'sans-serif'],
				beatricetrial: ['beatricetrial', 'san-serif'],
				plusjakartasans: ['Plus Jakarta Sans', 'sans-serif'],
				spacegrotesk: ["Space Grotesk", "sans-serif"]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
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
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	variants: {
		extend: {
			maxWidth: ['responsive'],
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
