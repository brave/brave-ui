"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledUnstyledButton = styled_components_1.default.button `
  padding: ${(p) => p.padding ? p.padding : 'inherit'};
  height: ${(p) => p.height ? p.height : 'inherit'};
  font-size: ${(p) => p.fontSize ? p.fontSize : 'inherit'};
  color: ${(p) => p.color ? p.color : 'inherit'};
  box-sizing: border-box;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
`;
exports.StyledUnstyledButton = StyledUnstyledButton;
//# sourceMappingURL=style.js.map