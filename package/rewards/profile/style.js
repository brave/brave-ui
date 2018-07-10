"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  flex-wrap: nowrap;
  font-family: Poppins;
`;
exports.StyledImageWrapper = styled_components_1.default.div `
  flex-basis: 30px;
  position: relative;
`;
exports.StyledImage = styled_components_1.default.img `
  border-radius: 50%;
  
  ${(p) => p.type === 'big'
    ? styled_components_1.css `
      width: 48px;
      height: 48px;
    `
    : ''};
  
  ${(p) => p.type !== 'big'
    ? styled_components_1.css `
      width: 24px;
      height: 24px;
    `
    : ''};
`;
exports.StyledVerified = styled_components_1.default.span `
  position: absolute;
  bottom: 2px;
  right: -1px;
`;
exports.StyledContent = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  margin-top: -5px;
  padding-left: ${(p) => p.type === 'big' ? '11px' : 0};
`;
exports.StyledTitleWrap = styled_components_1.default.div `
  margin-left: ${(p) => p.type !== 'big' ? '10px' : 0};
`;
exports.StyledTitle = styled_components_1.default.span `
  white-space: nowrap;
  
  ${(p) => p.type === 'big'
    ? styled_components_1.css `
      font-size: 18px;
      font-weight: 500;
      line-height: 1.22;
      letter-spacing: -0.2px;
      color: #4c54d2;
    `
    : ''};
  
  ${(p) => p.type !== 'big'
    ? styled_components_1.css `
      font-family: Muli;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.29;
      letter-spacing: -0.1px;
      color: #686978;
    `
    : ''};
`;
exports.StyledProvider = styled_components_1.default.span `
  white-space: nowrap;
  padding-left: 5px;
  
  ${(p) => p.type === 'big'
    ? styled_components_1.css `
      font-weight: 300;
      font-size: 18px;
    `
    : ''};
  
  color: ${(p) => p.type === 'big' ? '#4b4c5c' : '#b8b9c4'};
`;
exports.StyledProviderWrap = styled_components_1.default.div `
  font-size: 13px;
  color: #838391;
  margin-top: 3px;
`;
exports.StyledInlineVerified = styled_components_1.default.span `
  display: inline-block;
  vertical-align: middle;
`;
//# sourceMappingURL=style.js.map