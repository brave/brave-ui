"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledBoxedContent = styled_components_1.default.div `
  max-width: ${(p) => p.width};
  margin: ${(p) => p.margin};
  box-sizing: border-box;
  color: inherit;
`;
exports.default = StyledBoxedContent;
//# sourceMappingURL=style.js.map