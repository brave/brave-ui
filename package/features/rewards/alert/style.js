"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  position: ${(p) => helpers_1.setTheme(p.theme, 'position') || 'relative'};
  top: ${(p) => helpers_1.setTheme(p.theme, 'top') || 0};
  left: ${(p) => helpers_1.setTheme(p.theme, 'left') || 0};
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: nowrap;
  background-color: #fff;
  box-shadow: 0 1px 0 0 #dfdfe8;
  padding: 30px 38px 33px 19px;
  align-items: center;
  font-family: Poppins;
`;
exports.StyledIcon = styled_components_1.default.span `
  width: 40px;
  height: 40px;
  flex-basis: 40px;
`;
exports.StyledContent = styled_components_1.default.div `
  flex-grow: 1;
  flex-basis: 50%;
  padding-left: 11px;
  font-size: 14px;
  line-height: 1.57;
  color: #838391;

  b {
    font-weight: 600;
    color: #4b4c5c;
  }
`;
exports.StyledClose = styled_components_1.default.div `
  width: 11px;
  height: 11px;
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
`;
//# sourceMappingURL=style.js.map