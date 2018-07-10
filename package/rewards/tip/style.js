"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  border-radius: 8px;
  background-image: linear-gradient(148deg, #2825a7, #5465e8), linear-gradient(#696fdc, #696fdc);
  width: 214px;
  overflow: hidden;
  position: relative;
  padding: 16px 0 0;
  font-family: Poppins;
`;
exports.StyledTitle = styled_components_1.default.div `
  font-size: 12px;
  line-height: 1.83;
  color: #fff;
  opacity: 0.6;
  padding-left: 23px;
`;
exports.StyledAllow = styled_components_1.default.div `
`;
exports.StyledAllowToggle = styled_components_1.default.span `
  display: inline-block;
  margin-left: 33px;
  vertical-align: middle;
  padding-top: 2px;
`;
exports.StyledAllowText = styled_components_1.default.span `
  opacity: 0.65;
  font-size: 10px;
  line-height: 3.9;
  color: #fff;
`;
exports.StyledClose = styled_components_1.default.div `
  position: absolute;
  top: 16px;
  right: 16px;
`;
//# sourceMappingURL=style.js.map