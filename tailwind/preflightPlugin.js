const plugin = require("tailwindcss/plugin");
const fonts = require("../shared/fonts");
const global = require("../shared/global");
const typography = require("../shared/typography");

module.exports = plugin(function ({ addBase }) {
	addBase({
		...fonts,
		...global,
		...typography,
	});
});
