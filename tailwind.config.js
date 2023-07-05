/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{tsx,jsx,ts,js,mdx}",
		"./components/**/*.{tsx,jsx,ts,js,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				code: ["var(--font-scp)"],
				sans: ["var(--font-inter)"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
