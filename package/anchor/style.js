"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledAnchor = styled_components_1.default.a `
  color: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'anchor', 'color') || 'inherit'};
  text-decoration: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'anchor', 'textDecoration') || 'none'};
  font-size: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'anchor', 'fontSize') || '13px'};
  font-family: inherit;
  box-sizing: border-box;
`;
exports.default = StyledAnchor;
//# sourceMappingURL=style.js.map