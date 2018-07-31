"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const getColor = (color, disabled) => {
    let colorCode = '';
    if (disabled) {
        return '#DFDFE8';
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
const generateContent = (size, color, disabled) => {
    const colorCode = getColor(color, disabled);
    let props = `
    color: rgba(${colorCode}, 0.9);

    :hover {
      color: rgba(${colorCode}, 1);
    }

    :active {
      color: rgba(${colorCode}, 0.4);
    }
  `;
    if (disabled) {
        props = `
      color: ${colorCode};
    `;
    }
    switch (size) {
        case 'large':
            props += `
        font-size: 14px;
        border-radius: 24px;
        min-width: 116px;
        padding: 17px 15px;
      `;
            break;
        case 'medium':
            props += `
        font-size: 13px;
        border-radius: 20px;
        min-width: 104px;
        padding: 13.5px 10px;
      `;
            break;
        case 'small':
            props += `
        font-size: 11px;
        border-radius: 16px;
        min-width: 88px;
        padding: 10.5px 10px;
      `;
            break;
    }
    return styled_components_1.css `
    ${props}
  `;
};
exports.StyledWrapper = styled_components_1.default.div `
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  font-family: Poppins;
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