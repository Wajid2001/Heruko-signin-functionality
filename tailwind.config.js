module.exports = {
	// This is for Production
	purge: {
		enabled: true,
		content: ["./React_Files/**/*.jsx"],
	},

	// This is for Development
	// purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
