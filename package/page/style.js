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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
exports.StyledPage = StyledPage;
const StyledPageContent = styled_components_1.default.main `
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  width: 100%;
  height: 100%;
`;
exports.StyledPageContent = StyledPageContent;
//# sourceMappingURL=style.js.map