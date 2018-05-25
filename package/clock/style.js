"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledClock = styled_components_1.default.div `
  color: ${(p) => helpers_1.setTheme(p.theme, 'color') || 'inherit'};
  box-sizing: border-box;
  line-height: 1;
  user-select: none;
  display: flex;
  cursor: default;
  -webkit-font-smoothing: antialiased;
  font-family: inherit;
`;
exports.StyledClock = StyledClock;
const StyledTime = styled_components_1.default.span `
  box-sizing: border-box;
  letter-spacing: 0;
  font-size: 75px;
  font-weight: 200;
  color: inherit;
  font-family: inherit;
  display: inline-flex;
`;
exports.StyledTime = StyledTime;
const StyledPeriod = styled_components_1.default.span `
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  display: inline-block;
  font-size: 20px;
  letter-spacing: -0.2px;
  font-weight: 200;
  margin-top: 8px;
  margin-left: 3px;
  vertical-align: top;
`;
exports.StyledPeriod = StyledPeriod;
const StyledTimeSeparator = styled_components_1.default.span `
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: 200;
  /* center colon vertically in the text-content line */
  margin-top: -0.1em;
`;
exports.StyledTimeSeparator = StyledTimeSeparator;
//# sourceMappingURL=style.js.map