"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledTokens = styled_components_1.default.span `
  font-family: Poppins;
  font-weight: 300;
  line-height: 1.4;
  color: ${(p) => p.theme && p.theme.color && p.theme.color.token ? p.theme.color.token : '#4b4c5c'};
  display: ${(p) => helpers_1.setTheme(p.theme, 'display') || 'inline-block'};
`;
exports.StyledTokenValue = styled_components_1.default.span `
  color: ${(p) => p.theme && p.theme.color && p.theme.color.tokenNum ? p.theme.color.tokenNum : 'inherit'};
  font-size: ${(p) => p.theme && p.theme.size && p.theme.size.tokenNum ? p.theme.size.tokenNum : '16px'};
  font-weight: 500;
`;
exports.StyledContent = styled_components_1.default.span `
  color: ${(p) => p.theme && p.theme.color && p.theme.color.text ? p.theme.color.text : '#b8b9c4'};
  font-size: ${(p) => p.theme && p.theme.size && p.theme.size.text ? p.theme.size.text : '12px'};
  font-family: Muli;
  line-height: 1.29;
  display: inline-block;
  margin-left: 10px;
`;
exports.StyledTokenCurrency = styled_components_1.default.span `
  font-size: ${(p) => p.theme && p.theme.size && p.theme.size.token ? p.theme.size.token : '14px'};
  font-weight: 300;
  display: inline-block;
  margin-left: 4px;
`;
//# sourceMappingURL=style.js.map