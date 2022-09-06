const autoprefixer = require("autoprefixer");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./index.html", "./.html"],
	theme: {
		extend: {
			colors: {
				lightsage: "#78a5a6",
				darksage: "#3f5e61",
				lightgrey: "#f1f5f9",
				darkgreen: "#3a595c",
				xmasgreen: "#3a595c",
				sunyellow: "e9bb3d",
				rainblue: "#6994fa",
				turtlegreen: "#529873",
				oceangreen: "#bcd9d8",
			},
		},
		plugins: [],
	},
};
