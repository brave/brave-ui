"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledTextLabel = styled_components_1.default.p `
  user-select: ${(p) => p.noSelect ? 'none' : 'inherit'};
  cursor: ${(p) => p.noSelect ? 'default' : 'auto'};
  font-weight: ${(p) => helpers_1.setWeight(p, 'bold', 'inherit', '300')};
  padding: ${(p) => p.padding ? p.padding : '0'};
  font-size: ${(p) => p.size ? p.size : '13px'};
  color: ${(p) => p.color ? p.color : 'inherit'};
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