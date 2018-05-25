"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledMediaContent = styled_components_1.default.div `
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
`;
exports.StyledMediaContent = StyledMediaContent;
const StyledMedia = styled_components_1.default.img `
  width: ${(p) => helpers_1.setTheme(p.theme, 'width')};
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`;
exports.StyledMedia = StyledMedia;
const StyledMediaBody = styled_components_1.default.div `
  box-sizing: border-box;
  margin: ${(p) => helpers_1.setTheme(p.theme, 'margin')};
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
`;
exports.StyledMediaBody = StyledMediaBody;
//# sourceMappingURL=style.js.map