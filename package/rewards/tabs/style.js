"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
`;
exports.StyledTabWrapper = styled_components_1.default.div `
  border-bottom: 1px solid #DFDFE8;
  text-align: center;
  font-family: Poppins;
`;
exports.StyledTab = styled_components_1.default.div `
  border-radius: 6px 6px 0 0;
  border: 1px solid #DFDFE8;
  border-bottom: ${(p) => p.selected ? '1px solid #FFF' : '1px solid #DFDFE8'};
  color: ${(p) => p.selected ? '#FB542B' : '#686978'};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.29px;
  line-height: 44px;
  display: inline-block;
  cursor: pointer;
  min-width: 230px;
  padding: 0 10px;
  margin: 0 2px;
  position: relative;
  top: 1px
`;
exports.StyledContent = styled_components_1.default.div `
  padding: 34px 56px 20px;
`;
//# sourceMappingURL=style.js.map