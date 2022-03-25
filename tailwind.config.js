module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			body: ['"Quicksand"'],
		},
		extend: {},
	},
	plugins: [require("tailwindcss-textshadow")],
};
