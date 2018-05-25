"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledGrid = styled_components_1.default.div `
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns ? p.columns : '12'}, 1fr);
  grid-gap: ${(p) => helpers_1.setTheme(p.theme, 'gridGap') || '15px'};
  padding: ${(p) => helpers_1.setTheme(p.theme, 'padding') || '0'};
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth') || 'initial'};
  height: ${(p) => helpers_1.setTheme(p.theme, 'height') || 'initial'};
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || 'inherit'};
  background-color: ${(p) => helpers_1.setTheme(p.theme, 'backgroundColor') || 'inherit'};
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
  justify-content: ${(p) => helpers_1.setTheme(p.theme, 'justifyContent') || 'initial'};
  align-items: ${(p) => helpers_1.setTheme(p.theme, 'alignItems') || 'initial'};
  background-color: ${(p) => helpers_1.setTheme(p.theme, 'backgroundColor') || 'inherit'};
  flex-direction: ${(p) => helpers_1.setTheme(p.theme, 'flexDirection') || 'initial'};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;
exports.StyledColumn = StyledColumn;
//# sourceMappingURL=style.js.map