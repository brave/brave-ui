"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth') || '254px'};
  width: 100%;
`;
exports.StyledArea = styled_components_1.default.textarea `
  min-height: ${(p) => helpers_1.setTheme(p.theme, 'minHeight') || 'auto'};
  box-sizing: border-box;
  width: 100%;
  font-family: Muli;
  border: 1px solid #DFDFE8;
  border-radius: 6px;
  padding: 15px 0px 15px 20px;
  font-size: 16px;
  line-height: 26px;
`;
//# sourceMappingURL=style.js.map