const plugin = require("tailwindcss/plugin");
const buttons = require("../shared/buttons");

module.exports = plugin(function ({ addComponents }) {
	addComponents(buttons);
});
