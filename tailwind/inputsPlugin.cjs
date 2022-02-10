const plugin = require("tailwindcss/plugin");
const inputs = require("../shared/inputs.cjs");

module.exports = plugin(function ({ addComponents }) {
	addComponents(inputs);
});
