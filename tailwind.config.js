/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				md: '0px 0px 10px rgba(220,165,76, 0.5)',
			},
		},
	},
	plugins: [require('daisyui')],
}
