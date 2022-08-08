const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant }) {
    addVariant("js", ":root.js &")
});