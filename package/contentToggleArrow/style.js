"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledContentToggleArrow = styled_components_1.default.div `
  box-sizing: border-box;
  width: fit-content;
`;
exports.StyledContentToggleArrow = StyledContentToggleArrow;
const StyledContentToggleArrowControl = styled_components_1.default.div `
  box-sizing: border-box;
  position: relative;

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
  margin-left: 15px;
`;
exports.StyledContentToggleArrowSummary = StyledContentToggleArrowSummary;
const StyledContentToggleArrowContent = styled_components_1.default.div `
  box-sizing: border-box;
  overflow: ${(s) => s.open ? 'auto' : 'hidden'};
  height: ${(s) => s.open ? 'fit-content' : '0'};
  width: fit-content;
`;
exports.StyledContentToggleArrowContent = StyledContentToggleArrowContent;
//# sourceMappingURL=style.js.map