const plugin = require("tailwindcss/plugin");
const inputs = require("../shared/inputs");

module.exports = plugin(function ({ addComponents }) {
	addComponents(inputs);
});
