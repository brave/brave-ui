"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledAnchor = styled_components_1.default.a `
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  text-decoration: ${(p) => p.noStyle ? 'none' : 'underline'};
`;
exports.StyledAnchor = StyledAnchor;
//# sourceMappingURL=style.js.map