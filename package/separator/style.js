"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledSeparator = styled_components_1.default.hr `
  box-sizing: border-box;
  background: #ccc;
  border: 0px;
  height: 1px;
  width: 100%;
  margin-top: ${(p) => p.noMargin ? '0' : '10px'};
  margin-bottom: ${(p) => p.noMargin ? '0' : '10px'};
`;
exports.default = StyledSeparator;
//# sourceMappingURL=style.js.map