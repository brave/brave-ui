"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledGrid = styled_components_1.default.div `
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns ? p.columns : '12'}, 1fr);
  grid-gap: ${(p) => p.gap ? p.gap : '15px'};
  padding: ${(p) => p.padding ? p.padding : '0'};
  max-width: ${(p) => p.width ? p.width : 'initial'};
  height: ${(p) => p.height ? p.height : 'initial'};
  color: ${(p) => p.textColor ? p.textColor : 'inherit'};
  background-color: ${(p) => p.background ? p.background : 'inherit'};

  ${(p) => p.disabled
    ? styled_components_1.css `
      user-select: none;
      opacity: 0.25;
    ` : ''}
`;
exports.StyledGrid = StyledGrid;
const StyledColumn = styled_components_1.default.div `
  box-sizing: border-box;
  position: relative;
  display: ${(p) => p.align || p.verticalAlign || p.direction ? 'flex' : 'block'};
  grid-column: ${(p) => p.size ? `span ${p.size}` : 'span 12'};
  justify-content: ${(p) => p.align ? p.align : 'initial'};
  align-items: ${(p) => p.verticalAlign ? p.verticalAlign : 'initial'};
  background-color: ${(p) => p.background ? p.background : 'inherit'};
  flex-direction: ${(p) => p.direction ? p.direction : 'initial'};
`;
exports.StyledColumn = StyledColumn;
//# sourceMappingURL=style.js.map