const tokens = require("./tokens");

const pathRegex = /([a-zA-Z]+)(?:\[|\.)([a-zA-Z0-9-]+)\]?/
const token = (path) => {
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

    if (!value) {
        throw new Error(`${path} does not exist.`);
    }

    return value;
}

module.exports = {
    token
}