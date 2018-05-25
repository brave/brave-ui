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
//# sourceMappingURL=helpers.js.map