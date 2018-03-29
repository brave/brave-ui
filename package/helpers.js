"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyClass = (classesObj) => {
    return Object.keys(classesObj).filter((prop) => classesObj[prop]).join(' ');
};
//# sourceMappingURL=helpers.js.map