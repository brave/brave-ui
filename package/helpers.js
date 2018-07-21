"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
exports.setValueBasedOnSize = (size, medium, small, large) => {
    switch (size) {
        case 'medium':
            return medium;
        case 'small':
            return small;
        case 'large':
            return large;
        default:
            return medium;
    }
};
exports.setTheme = (theme, prop) => theme && theme[prop];
let local = {};
exports.initLocale = (locals) => {
    local = locals;
};
exports.getLocale = (key, replacements) => {
    if (!key || !local[key]) {
        return `MISSING: ${key}`;
    }
    let returnVal = local[key];
    if (!replacements) {
        return returnVal;
    }
    for (let item in replacements) {
        returnVal = returnVal.replace(new RegExp('{{\\s*' + item + '\\s*}}', 'g'), replacements[item].toString());
    }
    return returnVal;
};
//# sourceMappingURL=helpers.js.map