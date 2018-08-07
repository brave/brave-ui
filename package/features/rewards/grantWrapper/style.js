"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  font-family: Poppins;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: hidden;
  width: 100%;
  padding: 0 52px 20px;
  border-radius: 6px;
  height: 100%;
  width: 100%;
`;
exports.StyledHeader = styled_components_1.default.div `
  text-align: center;
  width: 100%;
  margin: 59px 0;
`;
exports.StyledTitle = styled_components_1.default.div `
  width: 100%;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fb542b;
`;
exports.StyledClose = styled_components_1.default.div `
  top: 22px;
  right: 22px;
  position: absolute;
`;
exports.StyledText = styled_components_1.default.div `
  width: 100%;
  font-family: Muli;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.63;
  text-align: center;
  color: #4b4c5c;
`;
//# sourceMappingURL=style.js.map