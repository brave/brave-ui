const tokens = require("./tokens");

const pathRegex = /([a-zA-Z]+)(?:\[|\.)([a-zA-Z0-9-]+)\]?/;

// Credit: https://stackoverflow.com/a/51564734
const hex2rgba = (hex, alpha = 1) => {
    if (typeof hex !== "string" && !hex.startsWith("#")) {
        return;
    }

	const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
};

const token = (path) => {
    if (typeof path !== "string") {
        throw new Error("Token path must be a string.")
    }

	let properties;
	if (path.includes(".") || path.includes("[")) {
		properties = path.match(pathRegex).slice(1);
	} else {
		properties = [path];
	}

	let value = tokens;
	for (prop of properties) {
		value = value[prop];
	}

    if (typeof value === "string" && value.startsWith("#")) {
        let alphaVar;
        if (path.includes("textColor")) {
            alphaVar = "var(--tw-text-opacity)";
        } else if (path.includes("backgroundColor")) {
            alphaVar = "var(--tw-bg-opacity)";
        } else if (path.includes("borderColor")) {
            alphaVar = "var(--tw-border-opacity)";
        } else {
            alphaVar = 1;
        }

        value = hex2rgba(value, alphaVar);
    }

	if (!value) {
		throw new Error(`${path} does not exist.`);
	}

	return value;
};

module.exports = {
	token,
    hex2rgba
};
