"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledAnchor = styled_components_1.default.a `
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || 'inherit'};
  text-decoration: ${(p) => helpers_1.setTheme(p.theme, 'textDecoration') || 'none'};
  font-size: ${(p) => helpers_1.setTheme(p.theme, 'fontSize') || '13px'};
  user-select: ${(p) => helpers_1.setTheme(p.theme, 'userSelect')};
  font-family: inherit;
  box-sizing: border-box;
`;
exports.default = StyledAnchor;
//# sourceMappingURL=style.js.map