/** @type {import('tailwindcss').Config} */
const defaultThemes = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xxxs: "280px",
			xxs: "375px",
			xs: "475px",
			...defaultThemes.screens,
		},
		extend: {
			colors: {
				muted: "#7F7F7F",
				dark: "#161616",
				"custom-cyan": "#D4FFF2",
				"cineast-yellow": "#FA8D0C",
				"light-dark": "#202020",
				"dark-card": "#212529",
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
