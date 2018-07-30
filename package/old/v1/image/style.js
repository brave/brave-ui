"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
const StyledPicture = styled_components_1.default.picture `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth')};
  min-width: ${(p) => helpers_1.setTheme(p.theme, 'minWidth')};
  width: ${(p) => helpers_1.setTheme(p.theme, 'width')};
  height: ${(p) => helpers_1.setTheme(p.theme, 'height')};
  min-height: ${(p) => helpers_1.setTheme(p.theme, 'minHeight')};
  margin: ${(p) => helpers_1.setTheme(p.theme, 'margin')};
  padding: ${(p) => helpers_1.setTheme(p.theme, 'padding')};
  box-sizing: border-box;
  display: block;
`;
exports.StyledPicture = StyledPicture;
const StyledFigure = styled_components_1.default.figure `
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  margin: 0;
`;
exports.StyledFigure = StyledFigure;
const StyledFigcaption = StyledFigure.withComponent('figure');
exports.StyledFigcaption = StyledFigcaption;
const StyledImage = StyledFigure.withComponent('img');
exports.StyledImage = StyledImage;
//# sourceMappingURL=style.js.map