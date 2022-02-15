const { token } = require("./utils");

module.exports = {
	":root": {
		"--tw-text-opacity": "1",
		"--tw-bg-opacity": "1",
		"--tw-border-opacity": "1",
	},
	html: { scrollBehavior: "smooth" },
	"html, body": {
		fontFamily: token("primaryFont").join(", "),
		fontWeight: "normal",
		lineHeight: 1.5,
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		color: token("textColor.light-01"),
		fontSize: "14px",
	},
	".theme--dark": { fontWeight: token("fontWeight.medium") },
	"a:not(.btn):hover": { textDecoration: "underline", color: "#872ec5" },
	"a:not(.btn):focus": {
		outline: "none",
		borderRadius: token("borderRadius.md"),
		boxShadow: `0 0 0 3px ${token("colors.blurple-300")}`,
	},
	".theme--ghost a:focus": {
		color: token("colors.white"),
		boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.6)",
	},
	"@media (min-width: 560px)": { "html, body": { fontSize: "16px" } },
	"[id]": { scrollMarginTop: "calc(var(--headerHeight) - 1px)" },
	"@supports (-webkit-touch-callout: none)": {
		"[id]:target > div": {
			paddingTop: "calc(var(--headerHeight) - 1px) !important",
			marginTop: "-calc(var(--headerHeight) - 1px) !important",
		},
	},
};
