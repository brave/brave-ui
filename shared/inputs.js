const { token } = require("./utils");

module.exports = {
	".input, .checkbox, .radio": {
		border: `${token("borderWidth[DEFAULT]")} solid ${token("colors[interactive-08]")}`,
		color: token("textColor[light-01]"),
		WebkitAppearance: "none",
		"&::placeholder": { color: token("textColor[light-03]") },
		"&:hover, &:focus, &:checked:hover, &:checked:focus": {
			outline: "none",
			border: `${token("borderWidth[DEFAULT]")} solid ${token("colors[blurple-300]")}`,
			boxShadow: `0 0 0 4px ${token("colors.blurple-300")}`
		},
		"&--ghost": {
			color: `${token("textColor.white")} !important`,
			"--tw-bg-opacity": "0.24",
			backgroundColor: token("backgroundColor.white"),
			backdropFilter: "blur(16px)",
			"&::placeholder": { color: token("textColor[dark-02]") },
			"&:focus, &:checked:focus, &:hover, &:checked:hover": {
				outline: "none",
				opacity: 100,
				border: `${token("borderWidth[DEFAULT]")} solid ${token("colors.white")}`,
				boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.6)",
			},
			"&:disabled, &:checked:disabled": {
				"--tw-text-opacity": "0.32",
				color: token("textColor.white"),
				cursor: "not-allowed",
			},
			"&:active, &.loading, &:checked:active, &:checked.loading": {
				"--tw-text-opacity": "0.32",
				color: `${token("textColor.white")} !important`,
				boxShadow: "none",
				borderColor: "transparent",
			},
		},
	},
	".input": {
		backgroundColor: token("colors.white"),
		borderRadius: token("borderRadius.md"),
		fontSize: token("fontSize.tiny")[0],
		height: "40px",
		minWidth: "250px",
		padding: "10px 18px",
		"&::placeholder": { color: token("textColor[light-03]") },
		".-errors &, &.-errors": {
			backgroundColor: token("colors[light-error-background]"),
			boxShadow: `0 0 0 4px ${token("colors.error-border")}`,
		},
		"&--ghost": {
			"--tw-bg-opacity": "0.24",
			backgroundColor: token("backgroundColor.white"),
			"&::placeholder": { color: token("textColor[dark-02]") },
			"&:hover": {
				"--tw-bg-opacity": "0.42",
				backgroundColor: token("backgroundColor.white"),
			},
			"&:disabled": {
				"--tw-bg-opacity": "0.14",
				backgroundColor: token("backgroundColor.white"),
			},
			"&:active, &.loading": {
				"--tw-bg-opacity": "0.32",
				backgroundColor: token("backgroundColor.white"),
			},
		}
	},
	".input--large": {
		fontSize: token("fontSize.sm")[0],
		height: "48px",
		padding: "12px 14px",
	},
	".radio, .checkbox": {
		width: 22,
		height: 22,
		"&:hover": {
			cursor: "pointer"
		},
		"&:checked": {
			backgroundColor: token("backgroundColor.interactive-05")
		},
		"&--ghost": {
			"&:checked": {
				backgroundColor: token("backgroundColor.white")
			},
		}
	},
	".radio": {
		borderRadius: token("borderRadius.full"),
		"&:checked": {
			"--tw-border-opacity": "0.24",
			border: `5px solid transparent`,
			boxShadow: `0 0 0 1px ${token("colors.interactive-05")}`,
			backgroundColor: "transparent",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='${encodeURIComponent(token("colors.interactive-05"))}'/%3E%3C/svg%3E%0A")`
		},
		"&--ghost": {
			borderColor: "transparent",
			"&:checked": {
				"--tw-bg-opacity": "1",
				boxShadow: `0 0 0 1px ${token("colors.white")}`,
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='${encodeURIComponent(token("colors.white"))}'/%3E%3C/svg%3E%0A")`
			},
		}
	},
	".checkbox": {
		borderRadius: token("borderRadius.DEFAULT"),
		"&:checked": {
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url("data:image/svg+xml,%3Csvg width='14' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.026.354C12.736.1 12.351 0 11.965 0c-.386.05-.724.202-.965.505L5.259 7.378 2.46 4.498c-.58-.607-1.496-.607-2.027 0C.144 4.8 0 5.155 0 5.558c0 .405.145.81.434 1.062l3.908 4.043c.29.303.627.455 1.013.455h.049c.385 0 .771-.203 1.013-.506l6.754-8.085c.482-.657.434-1.617-.145-2.173Z' fill='${encodeURIComponent(token("colors.white"))}'/%3E%3C/svg%3E")`
		},
		"&--ghost": {
			borderColor: "transparent",
		}
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
