"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
const StyledPanel = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth')};
  min-width: ${(p) => helpers_1.setTheme(p.theme, 'minWidth')};
  width: ${(p) => helpers_1.setTheme(p.theme, 'width')};
  height: ${(p) => helpers_1.setTheme(p.theme, 'height')};
  min-height: ${(p) => helpers_1.setTheme(p.theme, 'minHeight')};
  margin: ${(p) => helpers_1.setTheme(p.theme, 'margin')};
  padding: ${(p) => helpers_1.setTheme(p.theme, 'padding') || '40px'};
  display: ${(p) => helpers_1.setTheme(p.theme, 'display')};
  flex-direction: ${(p) => helpers_1.setTheme(p.theme, 'flexDirection')};
  justify-content: ${(p) => helpers_1.setTheme(p.theme, 'justifyContent')};
  align-items: ${(p) => helpers_1.setTheme(p.theme, 'alignItems')};
  background-color: ${(p) => helpers_1.setTheme(p.theme, 'backgroundColor') || '#FFF'};
  font-size: inherit;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(39, 46, 64, 0.2);
`;
exports.default = StyledPanel;
//# sourceMappingURL=style.js.map