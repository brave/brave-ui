"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledParagraph = styled_components_1.default.p `
  box-sizing: border-box;
  font-size: ${(p) => helpers_1.setTheme(p.theme, 'fontSize') || '13px'};
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || 'inherit'};
  font-weight: ${(p) => helpers_1.setTheme(p.theme, 'fontWeight') || 'normal'};
  font-style: ${(p) => helpers_1.setTheme(p.theme, 'fontStyle') || 'inherit'};
  margin: ${(p) => helpers_1.setTheme(p.theme, 'margin') || '0 0 20px'};
  padding: 0;
  -webkit-font-smoothing: antialiased;
  background: transparent;
  line-height: 1.4;
  font-family: inherit;
`;
exports.default = StyledParagraph;
//# sourceMappingURL=style.js.map