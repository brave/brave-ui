"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: nowrap;
  font-family: Poppins;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  padding-left: 20px;
  margin-bottom: 19px;
  width: 100%;
`;
exports.StyledIcon = styled_components_1.default.div `
  flex-basis: 40px;
  border: solid 1px #ffbbaa;
  margin: 12px 0 0;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
exports.StyledText = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 70%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: #fb542b;
  padding: 14px 10px 5px 10px;
`;
exports.StyledClaim = styled_components_1.default.button `
  flex-basis: 90px;
  background-color: #fb542b;
  font-family: Muli;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.4px;
  text-align: center;
  color: #fff;
  border: none;
  text-transform: uppercase;
`;
//# sourceMappingURL=style.js.map