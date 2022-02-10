const { token } = require("./utils");

module.exports = {
	h1: {
		fontWeight: token("fontWeight.semibold"),
		fontSize: `calc(${token("fontSize.h1")[0]} - 0.125rem)`,
		lineHeight: `calc(${token("fontSize.h1")[1]} - 0.125)`,
	},
	h2: {
		fontWeight: token("fontWeight.semibold"),
		fontSize: `calc(${token("fontSize.h2")[0]} - 0.125rem)`,
		lineHeight: `calc(${token("fontSize.h2")[1]} - 0.125)`,
	},
	h3: {
		fontWeight: token("fontWeight.semibold"),
		fontSize: `calc(${token("fontSize.h3")[0]} - 0.125rem)`,
		lineHeight: `calc(${token("fontSize.h3")[1]} - 0.125)`,
	},
	h4: {
		fontWeight: token("fontWeight.semibold"),
		fontSize: `calc(${token("fontSize.h4")[0]} - 0.125rem)`,
		lineHeight: `calc(${token("fontSize.h4")[1]} - 0.125)`,
	},
	h5: {
		fontWeight: token("fontWeight.semibold"),
		fontSize: `calc(${token("fontSize.h5")[0]} - 0.125rem)`,
		lineHeight: `calc(${token("fontSize.h5")[1]} - 0.125)`,
	},
	h6: {
		fontWeight: token("fontWeight.semibold"),
		fontSize: `calc(${token("fontSize.h6")[0]} - 0.125rem)`,
		lineHeight: `calc(${token("fontSize.h6")[1]} - 0.125)`,
	},
	strong: { fontWeight: token("fontWeight.semibold") },
	"@media (min-width: 560px)": {
		h1: {
			fontSize: token("fontSize.h1")[0],
			lineHeight: token("fontSize.h1")[1],
			fontWeight: token("fontWeight.semibold"),
		},
		h2: {
			fontSize: token("fontSize.h2")[0],
			lineHeight: token("fontSize.h2")[1],
			fontWeight: token("fontWeight.semibold"),
		},
		h3: {
			fontSize: token("fontSize.h3")[0],
			lineHeight: token("fontSize.h3")[1],
			fontWeight: token("fontWeight.semibold"),
		},
		h4: {
			fontSize: token("fontSize.h4")[0],
			lineHeight: token("fontSize.h4")[1],
			fontWeight: token("fontWeight.semibold"),
		},
		h5: {
			fontSize: token("fontSize.h5")[0],
			lineHeight: token("fontSize.h5")[1],
			fontWeight: token("fontWeight.semibold"),
		},
		h6: {
			fontSize: token("fontSize.h6")[0],
			lineHeight: token("fontSize.h6")[1],
			fontWeight: token("fontWeight.semibold"),
		},
	},
	a: { color: token("colors.interactive-05") },
};
