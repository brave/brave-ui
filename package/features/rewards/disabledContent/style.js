"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
`;
exports.StyledImage = styled_components_1.default.img `
`;
exports.StyledContent = styled_components_1.default.div `
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || '#4b4c5c'};

  b,
  a {
    font-weight: 500;
    color: ${(p) => helpers_1.setTheme(p.theme, 'boldColor') || '#4b4c5c'};
  }

  h3 {
    margin: 0;
    display: inline-block;
    padding: 0;
    font-family: Poppins;
    font-size: 28px;
    font-weight: 500;
    line-height: 0.5;
    color: #ceb4e1;
  }
`;
//# sourceMappingURL=style.js.map