"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  font-family: Poppins;
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: #dee2e6;
  border: 1px solid #dbdfe3;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 22px 34px 18px;
  margin-bottom: 25px;
`;
exports.StyledLeft = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
`;
exports.StyledRight = styled_components_1.default.div `
  padding: 10px 0 0;
  display: flex;
`;
exports.StyledLogo = styled_components_1.default.span `
`;
exports.StyledTitle = styled_components_1.default.div `
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  margin: 4px 0 0 11px;
`;
exports.StyledTM = styled_components_1.default.span `
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.2px;
  text-align: center;
  color: #222326;
  vertical-align: text-top;
`;
exports.StyleTitle = styled_components_1.default.div `
  font-size: 22px;
  line-height: 1.27;
  color: #4b4c5c;
  margin-top: 40px;
`;
exports.StyleText = styled_components_1.default.div `
  font-family: Muli;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.75;
  color: #838391;
`;
exports.StyledContent = styled_components_1.default.div `
  flex-basis: 100%;
`;
//# sourceMappingURL=style.js.map