"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledBoxedContent = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'boxedContent', 'maxWidth')};
  margin: ${(p) => helpers_1.setTheme(p.theme, 'boxedContent', 'margin')};
  font-family: ${(p) => helpers_1.setTheme(p.theme, 'boxedContent', 'fontFamily')};
  color: ${(p) => helpers_1.setTheme(p.theme, 'boxedContent', 'color')};
  font-size: inherit;
  box-sizing: border-box;
`;
exports.default = StyledBoxedContent;
//# sourceMappingURL=style.js.map