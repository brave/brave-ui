"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledGrid = styled_components_1.default.div `
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns ? p.columns : '12'}, 1fr);
  grid-gap: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'grid', 'gridGap') || '15px'};
  padding: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'grid', 'padding') || '0'};
  max-width: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'grid', 'maxWidth') || 'initial'};
  height: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'grid', 'height') || 'initial'};
  color: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'grid', 'color') || 'inherit'};
  background-color: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'grid', 'backgroundColor') || 'inherit'};
  font-family: inherit;
  font-size: inherit;

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
  display: flex;
  grid-column: ${(p) => p.size ? `span ${p.size}` : 'span 12'};
  justify-content: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'column', 'justifyContent') || 'initial'};
  align-items: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'column', 'alignItems') || 'initial'};
  background-color: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'column', 'backgroundColor') || 'inherit'};
  flex-direction: ${(p) => helpers_1.checkIfThemeProp(p.theme, 'column', 'flexDirection') || 'initial'};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;
exports.StyledColumn = StyledColumn;
//# sourceMappingURL=style.js.map