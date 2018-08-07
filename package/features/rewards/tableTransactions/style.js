"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
`;
exports.StyledTHLast = styled_components_1.default.div `
  text-align: right;
  padding-right: 14px;
`;
exports.StyledProvider = styled_components_1.default.span `
  color: #9e9fab;
`;
exports.StyledType = styled_components_1.default.div `
  color: ${(p) => helpers_1.setTheme(p, 'color') || null};
`;
//# sourceMappingURL=style.js.map