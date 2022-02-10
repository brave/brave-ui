const plugin = require("tailwindcss/plugin");
const buttons = require("../shared/buttons.cjs");

module.exports = plugin(function ({ addComponents }) {
	addComponents(buttons);
});
