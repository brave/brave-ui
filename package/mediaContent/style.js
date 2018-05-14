"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledMediaContent = styled_components_1.default.div `
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
`;
exports.StyledMediaContent = StyledMediaContent;
const StyledMedia = styled_components_1.default.img `
  width: ${(p) => p.mediaSize};
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`;
exports.StyledMedia = StyledMedia;
const StyledMediaBody = styled_components_1.default.div `
  box-sizing: border-box;
  margin-left: ${(p) => p.gap};
`;
exports.StyledMediaBody = StyledMediaBody;
//# sourceMappingURL=style.js.map