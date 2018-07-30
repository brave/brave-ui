"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledContentToggleArrow = styled_components_1.default.div `
  box-sizing: border-box;
  width: -webkit-fill-available;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`;
exports.StyledContentToggleArrow = StyledContentToggleArrow;
const StyledContentToggleArrowControl = styled_components_1.default.div `
  box-sizing: border-box;
  position: relative;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  user-select: none;

  &::after {
    content: ${(s) => s.open ? '"▼"' : '"▶"'};
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top 0;
    left: 0;
  }
`;
exports.StyledContentToggleArrowControl = StyledContentToggleArrowControl;
const StyledContentToggleArrowSummary = styled_components_1.default.div `
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  margin-left: 15px;
`;
exports.StyledContentToggleArrowSummary = StyledContentToggleArrowSummary;
const StyledContentToggleArrowContent = styled_components_1.default.div `
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  overflow: ${(s) => s.open ? 'auto' : 'hidden'};
  height: ${(s) => s.open ? 'fit-content' : '0'};
  width: -webkit-fill-available;
`;
exports.StyledContentToggleArrowContent = StyledContentToggleArrowContent;
//# sourceMappingURL=style.js.map