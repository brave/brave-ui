const plugin = require("tailwindcss/plugin");
const fonts = require("../shared/fonts.cjs");
const global = require("../shared/global.cjs");
const typography = require("../shared/typography.cjs");

module.exports = plugin(function ({ addBase }) {
	addBase({
		...fonts,
		...global,
		...typography,
	});
});
