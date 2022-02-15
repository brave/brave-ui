const { token } = require("./utils");

module.exports = {
	".input": {
		backgroundColor: token("colors.white"),
		border: `${token("borderWidth[DEFAULT]")} solid ${token("colors[interactive-08]")}`,
		borderRadius: token("borderRadius.md"),
		fontSize: token("fontSize.tiny")[0],
		color: token("textColor[light-01]"),
		height: "40px",
		minWidth: "250px",
		WebkitAppearance: "none",
		padding: "10px 18px",
		"&::placeholder": { color: token("textColor[light-03]") },
		"&:hover, &:focus": {
			outline: "none",
			border: `${token("borderWidth[DEFAULT]")} solid ${token("colors[blurple-300]")}`,
			boxShadow: `0 0 0 4px ${token("colors.blurple-300")}`,
		},
		".-errors &, &.-errors": {
			backgroundColor: token("colors[light-error-background]"),
			boxShadow: `0 0 0 4px ${token("colors.error-border")}`,
		},
	},
	".input--large": {
		fontSize: token("fontSize.sm")[0],
		height: "48px",
		padding: "12px 14px",
	},
	".error__message": {
		display: "none",
		alignSelf: "start",
		alignItems: "center",
		paddingTop: token("spacing[2]"),
		fontSize: token("fontSize.tiny")[0],
		textAlign: "left",
		color: token("colors[error-icon]"),
		"&::before": {
			marginRight: token("spacing[1]"),
			width: token("width[4]"),
			display: "inline-block",
			content: '""',
			backgroundImage:
				"url(\"data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23BD1531' fill-rule='evenodd' d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-2.917a.613.613 0 01-.414-.169.61.61 0 01-.17-.414.6.6 0 01.17-.414.61.61 0 01.828 0c.105.11.17.256.17.414a.614.614 0 01-.17.414.613.613 0 01-.414.17zM7 8.75a.583.583 0 01-.583-.583V3.5a.583.583 0 111.166 0v4.667c0 .322-.26.583-.583.583z' clip-rule='evenodd'/%3E%3C/svg%3E\")",
			backgroundRepeat: "no-repeat",
		},
		".theme--ghost &, &.theme--ghost": {
			color: token("colors.white"),
			"&::before": {
				backgroundImage:
					"url(\"data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' fill-rule='evenodd' d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-2.917a.613.613 0 01-.414-.169.61.61 0 01-.17-.414.6.6 0 01.17-.414.61.61 0 01.828 0c.105.11.17.256.17.414a.614.614 0 01-.17.414.613.613 0 01-.414.17zM7 8.75a.583.583 0 01-.583-.583V3.5a.583.583 0 111.166 0v4.667c0 .322-.26.583-.583.583z' clip-rule='evenodd'/%3E%3C/svg%3E\")",
			},
		},
	},
	".-errors .error__message, .-errors.error__message": {
		display: "flex !important",
	},
};
