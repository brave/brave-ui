"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
function GenerateIconComponentForGraphic(Graphic) {
    return styled_components_1.default.svg.attrs({
        children: [Graphic.props.children],
        viewBox: '0 0 32 32',
        'aria-hidden': (props) => (props.title === undefined ? 'true' : undefined),
        focusable: 'false',
        role: (props) => (props.title !== undefined ? 'img' : undefined)
    }) `
    width: 100%;
    height: 100%;
    fill: currentColor;
  `;
}
exports.default = GenerateIconComponentForGraphic;
//# sourceMappingURL=template.js.map