"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledUnstyledButton = styled_components_1.default.button `
  font-size: ${(p) => helpers_1.setTheme(p.theme, 'fontSize') || 'inherit'};
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || 'inherit'};
  user-select: ${(p) => helpers_1.setTheme(p.theme, 'userSelect')};
  text-decoration: ${(p) => helpers_1.setTheme(p.theme, 'textDecoration')};
  font-family: inherit;
  box-sizing: border-box;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  margin: 0;
  padding: ${(p) => helpers_1.setTheme(p.theme, 'padding') || '0'};

  &:hover {
    color: ${(p) => helpers_1.setTheme(p.theme, 'hoverColor')};
  }
`;
exports.default = StyledUnstyledButton;
//# sourceMappingURL=style.js.map