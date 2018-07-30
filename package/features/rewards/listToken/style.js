"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  position: relative;
  display: flex;
  border-bottom: ${(p) => helpers_1.setTheme(p.theme, 'borderBottom') || '1px solid #d0d6dc'};
  border-top: ${(p) => helpers_1.setTheme(p.theme, 'borderTop') || 'none'};
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  font-family: Poppins;
`;
exports.StyledTitle = styled_components_1.default.div `
  font-size: 14px;
  line-height: 2.79;
  color: #4b4c5c;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 60%;
`;
exports.StyledContentWrapper = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 40%;
  text-align: right;
`;
//# sourceMappingURL=style.js.map