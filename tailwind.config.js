module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'media',
	theme: {
		extend: {
			animation: {
				'slide-in': 'slideIn 0.5s ease-in-out',
			},
			keyframes: {
				slideIn: {
					'0%': { right: '-3rem' },
					'100%': { right: '2rem' },
				},
			},
			colors: {
				primary: '#9E1B32',
				'primary-light': '#FFC6C6',
				'primary-dark': '#7E0E1B',
				secondary: '#828A8F',
			},
		},
	},
	plugins: [],
};
