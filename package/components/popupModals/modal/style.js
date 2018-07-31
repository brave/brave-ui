"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(12, 13, 33, 0.85);
  z-index: 99;
  padding: 0 20px;
`;
exports.StyledDialog = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth') || '920px'};
  margin: 52px auto;
  padding: 61px 50px;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`;
exports.StyledClose = styled_components_1.default.div `
  position: absolute;
  top: 19px;
  right: 19px;
  padding: 10px;
  cursor: pointer;
`;
exports.StyledContent = styled_components_1.default.div `
`;
//# sourceMappingURL=style.js.map