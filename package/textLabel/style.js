"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledTextLabel = styled_components_1.default.p `
  font-weight: ${(p) => helpers_1.setTheme(p.theme, 'fontWeight') || 'normal'};
  padding: ${(p) => helpers_1.setTheme(p.theme, 'padding') || '0'};
  font-size: ${(p) => helpers_1.setTheme(p.theme, 'fontSize') || '13px'};
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || 'inherit'};
  line-height: ${(p) => helpers_1.setTheme(p.theme, 'lineHeight')};
  cursor: ${(p) => helpers_1.setTheme(p.theme, 'cursor')};
  user-select: none;
  font-family: inherit;
  box-sizing: border-box;
  background: none;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
exports.default = StyledTextLabel;
//# sourceMappingURL=style.js.map