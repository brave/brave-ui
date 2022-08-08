const defaultTheme = require("tailwindcss/defaultTheme");
const { primaryFont, fontSize, textColor, backgroundColor, colors, boxShadow } = require("../shared/tokens");

module.exports = {
	theme: {
		fontSize,
		boxShadow,
		textColor: {
			...colors,
			...textColor
		},
		backgroundColor: {
			...colors,
			...backgroundColor
		},
		colors: {
			...colors,
			gray: {
				100: "#E6E8F5",
				600: "#84889C",
			},
		},
		fontFamily: {
			sans: [...primaryFont, ...defaultTheme.fontFamily.sans],
		},
		screens: {
			xxs: "360px",
			xs: "440px",
			sm: "560px",
			"md-sm": "641px",
			md: "821px",
			lg: "1141px",
			xl: "1440px",
		},
		opacity: {
			0: "0",
			10: ".1",
			15: ".15",
			20: ".2",
			25: ".25",
			30: ".3",
			35: ".35",
			40: ".4",
			45: ".45",
			50: ".5",
			55: ".55",
			60: ".6",
			65: ".65",
			70: ".7",
			75: ".75",
			80: ".8",
			85: ".85",
			90: ".9",
			95: ".95",
			100: "1",
		},
		extend: {
			gridTemplateColumns: {
				13: "repeat(13, minmax(0, 1fr))",
				14: "repeat(14, minmax(0, 1fr))",
				15: "repeat(15, minmax(0, 1fr))",
				16: "repeat(16, minmax(0, 1fr))",
				17: "repeat(17, minmax(0, 1fr))",
			},
			minWidth: {
				"max-content": "max-content",
			},
		},
	},
	plugins: [
		require("./preflightPlugin"),
		require("./buttonsPlugins"),
		require("./inputsPlugin"),
		require("./jsVariant")
	],
};
