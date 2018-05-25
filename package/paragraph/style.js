"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledParagraph = styled_components_1.default.p `
  box-sizing: border-box;
  font-size: ${(p) => helpers_1.setTheme(p.theme, 'paragraph', 'fontSize') || '13px'};
  color: ${(p) => helpers_1.setTheme(p.theme, 'paragraph', 'color') || 'inherit'};
  font-weight: ${(p) => helpers_1.setTheme(p.theme, 'paragraph', 'fontWeight') || 'normal'};
  font-style: ${(p) => helpers_1.setTheme(p.theme, 'paragraph', 'fontStyle') || 'inherit'};
  padding: 0;
  -webkit-font-smoothing: antialiased;
  background: transparent;
  margin: 0;
  line-height: 1.4;
  margin-bottom: 20px;
  font-family: inherit;
`;
exports.default = StyledParagraph;
//# sourceMappingURL=style.js.map