"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const defaultBg = '#0c0d21';
exports.StyledWrapper = styled_components_1.default.div `
  position: relative;
`;
exports.StyledArrow = styled_components_1.default.div `
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  z-index: 3;
  ${(p) => p.position === 'bottom'
    ? styled_components_1.css `
      top: -7px;
      left: calc(50% - 4px);
      border-width: 0 6.5px 8px 6.5px;
      border-color: transparent transparent ${(p) => p.theme && p.theme.color ? p.theme.color.background : defaultBg} transparent;
    `
    : ''};

  ${(p) => p.position === 'top'
    ? styled_components_1.css `
      bottom: -7px;
      left: calc(50% - 4px);
      border-width: 8px 6.5px 0 6.5px;
      border-color: ${(p) => p.theme && p.theme.color ? p.theme.color.background : defaultBg} transparent transparent transparent;
    `
    : ''};

  ${(p) => p.position === 'left'
    ? styled_components_1.css `
      top: 8px;
      right: -7px;
      border-width: 6.5px 0 6.5px 8px;
      border-color: transparent transparent transparent ${(p) => p.theme && p.theme.color ? p.theme.color.background : defaultBg};
    `
    : ''};

  ${(p) => p.position === 'right'
    ? styled_components_1.css `
      top: 8px;
      left: -7px;
      border-width: 6.5px 8px 6.5px 0;
      border-color: transparent ${(p) => p.theme && p.theme.color ? p.theme.color.background : defaultBg} transparent transparent;
    `
    : ''};
`;
exports.StyledArrowOutline = styled_components_1.default.div `
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  z-index: 2;
  ${(p) => p.position === 'bottom'
    ? styled_components_1.css `
      top: -9px;
      left: calc(50% - 4px);
      border-width: 0 6.5px 8px 6.5px;
      border-color: transparent transparent ${(p) => p.theme && p.theme.color ? p.theme.color.border : defaultBg} transparent;
    `
    : ''};

  ${(p) => p.position === 'top'
    ? styled_components_1.css `
      bottom: -9px;
      left: calc(50% - 4px);
      border-width: 8px 6.5px 0 6.5px;
      border-color: ${(p) => p.theme && p.theme.color ? p.theme.color.border : defaultBg} transparent transparent transparent;
    `
    : ''};

  ${(p) => p.position === 'left'
    ? styled_components_1.css `
      top: 8px;
      right: -9px;
      border-width: 6.5px 0 6.5px 8px;
      border-color: transparent transparent transparent ${(p) => p.theme && p.theme.color ? p.theme.color.border : defaultBg};
    `
    : ''};

  ${(p) => p.position === 'right'
    ? styled_components_1.css `
      top: 8px;
      left: -9px;
      border-width: 6.5px 8px 6.5px 0;
      border-color: transparent ${(p) => p.theme && p.theme.color ? p.theme.color.border : defaultBg} transparent transparent;
    `
    : ''};
`;
exports.StyledTooltip = styled_components_1.default.div `
  display: ${(p) => p.open ? 'block' : 'none'};
  position: absolute;
  border-radius: 4px;
  font-family: Muli;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: -0.1px;
  text-align: ${(p) => p.theme && p.theme.align ? p.theme.align : 'center'};
  padding: ${(p) => p.theme && p.theme.padding ? p.theme.padding : '4px'};
  width: ${(p) => p.theme && p.theme.width ? p.theme.width : '150px'};
  box-shadow: ${(p) => p.theme && p.theme.boxShadow ? p.theme.boxShadow : '1px 1px 5px 0 rgba(34, 35, 38, 0.43)'};
  background: ${(p) => p.theme && p.theme.color ? p.theme.color.background : defaultBg};
  border: ${(p) => p.theme && p.theme.border ? p.theme.border : `1px solid ${defaultBg}`};
  color: ${(p) => p.theme && p.theme.color ? p.theme.color.text : '#fff'};

  ${(p) => p.position === 'bottom'
    ? styled_components_1.css `
      margin-top: ${(p) => p.theme && p.theme.offSet ? p.theme.offSet : 14}px;
      top: 100%;
      left: -50%;
    `
    : ''};

  ${(p) => p.position === 'top'
    ? styled_components_1.css `
      margin-bottom: ${(p) => p.theme && p.theme.offSet ? p.theme.offSet : 14}px;
      bottom: 100%;
      left: -50%;
    `
    : ''};

  ${(p) => p.position === 'left'
    ? styled_components_1.css `
      margin-right: ${(p) => p.theme && p.theme.offSet ? p.theme.offSet : 14}px;
      right: 100%;
      top: -50%;
    `
    : ''};

  ${(p) => p.position === 'right'
    ? styled_components_1.css `
      margin-left: ${(p) => p.theme && p.theme.offSet ? p.theme.offSet : 14}px;
      left: 100%;
      top: -50%;
    `
    : ''};
`;
//# sourceMappingURL=style.js.map