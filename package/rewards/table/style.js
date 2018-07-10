"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
`;
exports.StyledNoContent = styled_components_1.default.div `
  text-align: center;
  padding: 30px 0;
  color: #999ea2;
  font-size: 14px;
`;
exports.StyledTable = styled_components_1.default.table `
  width: 100%;
  margin-bottom: 11px;
`;
exports.StyledTH = styled_components_1.default.th `
  text-transform: uppercase;
  text-align: left;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 2.33;
  border-bottom: 2px solid #dedfe4;
  border-top: 2px solid #dedfe4;
  color: #4B4C5C;
  padding: 9px 0;
  
  ${(p) => p.theme
    ? styled_components_1.css `
      ${p.theme}
    `
    : ''};
`;
exports.StyledTR = styled_components_1.default.tr `
  ${(p) => p.theme
    ? styled_components_1.css `
      ${p.theme}
    `
    : ''};
`;
exports.StyledTD = styled_components_1.default.td `
  font-family: Muli;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  color: #686978;
  border-bottom: solid 1px #e4e8ec;
  padding: 9px 0;
  text-align: left;
  
  ${(p) => p.theme
    ? styled_components_1.css `
      ${p.theme}
    `
    : ''};
`;
//# sourceMappingURL=style.js.map