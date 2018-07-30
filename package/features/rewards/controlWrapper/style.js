"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth') || '254px'};
  width: 100%;
  margin-bottom: 12px;
`;
exports.StyledTitle = styled_components_1.default.div `
  width: 100%;
  font-family: Poppins;
  line-height: normal;
  font-size: 14px;
  font-weight: 500;
  color: #686978;
  margin-bottom: 6px;
`;
//# sourceMappingURL=style.js.map