"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../helpers");
const check = require('./assets/check');
exports.StyledWrapper = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth') || '254px'};
  width: 100%;
`;
exports.StyledLabel = styled_components_1.default.div `
  font-family: Poppins;
  font-size: 14px;
  line-height: 2.79;
  color: #686978;
`;
exports.StyledBox = styled_components_1.default.span `
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: solid 1px ${(p) => helpers_1.setTheme(p.theme, 'borderColor') || '#d1d1db'};
  display: inline-block;
  margin-right: 11px;
  position: relative;
  top: 3px;
  
 ${(p) => p.selected
    ? styled_components_1.css `
      border-color: #a1a8f2;
      background: url("data:image/svg+xml,${check(p.theme.checkColor)}") no-repeat 3px 5px;
    ` : ''}
`;
//# sourceMappingURL=style.js.map