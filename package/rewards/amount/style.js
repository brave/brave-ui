"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  margin-bottom: 8px;
  user-select: none;
  font-family: Poppins;
`;
exports.StyledAmount = styled_components_1.default.span `
  opacity: 1;
  border-radius: 20px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: ${(p) => p.selected ? 'rgba(255, 255, 255, 0.35)' : 'transparent'};
  vertical-align: baseline;
  padding: ${(p) => p.type === 'big' ? '10px 16px 13px' : '7px 12px 9px'};
  min-width: ${(p) => p.type === 'big' ? '118px' : '69px'};
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  margin-right: 12px;
`;
exports.StyledTokens = styled_components_1.default.span `
  font-weight: 400;
`;
exports.StyledLogo = styled_components_1.default.span `
  vertical-align: text-bottom;
  margin-right: 6px;
`;
exports.StyledConverted = styled_components_1.default.span `
  vertical-align: baseline;
  opacity: ${(p) => p.selected ? 1 : 0.4};
  font-size: ${(p) => p.type === 'big' ? '12px' : '10px'};
  color: #ffffff;
  font-weight: 500;
`;
//# sourceMappingURL=style.js.map