"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth') || '254px'};
  width: 100%;
`;
exports.StyledLabel = styled_components_1.default.div `
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.3;
  color: #686978;
  display: flex;
  margin-bottom: 20px;
`;
exports.StyledBox = styled_components_1.default.span `
  flex-basis: 18px;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: solid 1px ${(p) => helpers_1.setTheme(p.theme, 'borderColor') || '#d1d1db'};
  margin-right: 11px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
 ${(p) => p.selected
    ? styled_components_1.css `
      border-color: #a1a8f2;
    ` : ''}
`;
exports.StyledText = styled_components_1.default.span `
  flex: 1;
`;
//# sourceMappingURL=style.js.map