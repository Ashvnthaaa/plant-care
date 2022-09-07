const autoprefixer = require("autoprefixer");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./index.html", "./.html"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676')",
			},
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
