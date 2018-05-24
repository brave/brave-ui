"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledBoxedContent = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'boxedContent', 'maxWidth')};
  margin: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'boxedContent', 'margin')};
  color: inherit;
  font-size: inherit;
  box-sizing: border-box;
  font-family: inherit;
`;
exports.default = StyledBoxedContent;
//# sourceMappingURL=style.js.map