"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledPage = styled_components_1.default.div `
  font-family: ${(p) => helpers_1.setTheme(p.theme, 'fontFamily') || 'inherit'};
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || 'inherit'};
  padding: ${(p) => helpers_1.setTheme(p.theme, 'padding') || '40px'};
  background: ${(p) => helpers_1.setTheme(p.theme, 'background') || 'inherit'};
  box-sizing: border-box;
  background-attachment: fixed;
  background-size: auto;
  font-size: inherit;
  display: flex;
  flex-direction: column;
  height: initial;
  min-height: 100%;
`;
exports.StyledPage = StyledPage;
const StyledPageContent = styled_components_1.default.main `
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
`;
exports.StyledPageContent = StyledPageContent;
//# sourceMappingURL=style.js.map