"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  position: relative;
  font-family: Poppins;
`;
exports.StyledContent = styled_components_1.default.div `
  padding: ${(p) => helpers_1.setTheme(p.theme, 'paddingBox') || '0'};
`;
exports.StyledDonationTitle = styled_components_1.default.div `
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #fff;
  margin-bottom: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 167px;
`;
exports.StyledSend = styled_components_1.default.div `
  background: ${(p) => helpers_1.setTheme(p.theme, 'sendBgColor') || '#4c54d2'};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: ${(p) => p.disabled ? (helpers_1.setTheme(p.theme, 'disabledSendColor') || '#3e45b2') : '#fff'};
  padding: ${(p) => helpers_1.setTheme(p.theme, 'paddingSend') || '0'};
  text-transform: uppercase;
`;
exports.StyledIconSend = styled_components_1.default.span `
  vertical-align: middle;
  display: inline-block;
  margin-right: 18px;
`;
exports.StyledFunds = styled_components_1.default.div `
  font-family: Muli;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.69;
  color: #fff;
  padding: ${(p) => helpers_1.setTheme(p.theme, 'paddingFunds') || '0'};
  background: #1b1d2f;
  display: flex;
  position:absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  
  a {
    color: #6cc7fd;
    text-decoration: none;
  }
`;
exports.StyledIconFace = styled_components_1.default.div `
  flex-basis: 26px;
  margin-right: 9px;
`;
exports.StyledFundsText = styled_components_1.default.div `
  flex: 1;
  margin-right: 9px;
`;
//# sourceMappingURL=style.js.map