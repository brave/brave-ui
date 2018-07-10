"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const getColor = (color, disabled) => {
    let colorCode = '';
    if (disabled) {
        return '#EBECF0';
    }
    switch (color) {
        case 'brand':
            colorCode = '251, 84, 43';
            break;
        case 'action':
            colorCode = '76, 84, 210';
            break;
    }
    return colorCode;
};
const generateWrapper = (size) => {
    switch (size) {
        case 'large':
            return styled_components_1.css `
        font-size: 14px;
        border-radius: 24px;
        min-width: 116px;
      `;
        case 'medium':
            return styled_components_1.css `
        font-size: 13px;
        border-radius: 20px;
        min-width: 104px;
      `;
        case 'small':
            return styled_components_1.css `
        font-size: 11px;
        border-radius: 16px;
        min-width: 88px;
      `;
    }
    return ``;
};
const generateContent = (size, color, disabled) => {
    const colorCode = getColor(color, disabled);
    let props = `
    background: rgba(${colorCode}, 0.9);
    color: #fff;
    
    :hover {
      background: rgba(${colorCode}, 1);
    }
    
    :active {
      background: rgba(${colorCode}, 0.6);
    }
  `;
    if (disabled) {
        props = `
      background: ${colorCode};
      color: #fff;
    `;
    }
    let padding = ``;
    switch (size) {
        case 'large':
            padding = `
        padding: 17px 15px;
      `;
            break;
        case 'medium':
            padding = `
        padding: 13.5px 10px;
      `;
            break;
        case 'small':
            padding = `
        padding: 10.5px 10px;
      `;
            break;
    }
    return styled_components_1.css `
    ${props}
    ${padding}
  `;
};
exports.StyledWrapper = styled_components_1.default.div `
  display: inline-block;
  overflow: hidden;
  background: #fff;
  ${(p) => generateWrapper(p.size)};
  font-family: Poppins;
`;
exports.StyledContent = styled_components_1.default.div `
  text-align: center;
  box-sizing: border-box;
  letter-spacing: 0;
  font-weight: 600;
  line-height: 1;
  cursor: ${(p) => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  ${(p) => generateContent(p.size, p.color, (p.disabled || false))};
`;
exports.StyledIcon = styled_components_1.default.span `
  display: inline-block;
  vertical-align: bottom;
  margin: ${(p) => p.icon && p.icon.position === 'left' ? '0 10px 0 0' : '0 0 0 10px'};
`;
//# sourceMappingURL=style.js.map