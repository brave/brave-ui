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
const generateContent = (color, disabled) => {
    const colorCode = getColor(color, disabled);
    let props = `
    background: rgba(${colorCode}, 0.9);
    color: #fff;
    
    :hover {
      background: rgba(${colorCode}, 1);
    }
    
    :active {
      background: rgba(${colorCode}, 0.4);
    }
  `;
    if (disabled) {
        props = `
      background: ${colorCode};
      color: #fff;
    `;
    }
    return styled_components_1.css `
    padding: 21px 15px;
    ${props}
  `;
};
exports.StyledWrapper = styled_components_1.default.div `
  display: inline-block;
  overflow: hidden;
  background: #fff;
  font-size: 14px;
  border-radius: 28px;
  min-width: 235px;
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
  text-transform: uppercase;
  
  ${(p) => generateContent(p.color, (p.disabled || false))};
`;
exports.StyledIcon = styled_components_1.default.span `
  display: inline-block;
  vertical-align: bottom;
  margin: ${(p) => p.icon && p.icon.position === 'left' ? '0 10px 0 0' : '0 0 0 10px'};
`;
//# sourceMappingURL=style.js.map