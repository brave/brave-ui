"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  position: relative;
  display: flex;
  border-bottom: solid 1px #cfd5da;
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  font-family: Poppins;
`;
exports.StyledTitle = styled_components_1.default.div `
  font-size: 16px;
  line-height: 1;
  color: #4b4c5c;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  padding: 9px 0 15px;
`;
exports.StyledContentWrapper = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  text-align: right;
`;
exports.StyledContent = styled_components_1.default.div `
  ${(p) => p.theme
    ? styled_components_1.css `
      ${p.theme}
    `
    : ''}
`;
//# sourceMappingURL=style.js.map