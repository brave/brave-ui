"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledSelectOption = styled_components_1.default.select `
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 8px -4px rgba(0, 0, 0, 1);
  display: block;
  color: rgb(68, 68, 68);
  font-size: 13px;
  font-family: inherit;
  border: solid 1px rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 6px 12px 6px 6px;
  width: 100%;
  background-color: #fbfbfb;
  background-size: 12px 12px;
  -webkit-appearance: none;
  min-height: 32px;
  margin-bottom: 12px;

  ${(p) => p.disabled
    ? styled_components_1.css `
      user-select: none;
      opacity: 0.25;
    ` : ''}

  ${(p) => p.multiple
    ? styled_components_1.css `
      padding: 6px;
    ` : ''}
`;
exports.StyledSelectOption = StyledSelectOption;
const StyledSelectOptionWrapper = styled_components_1.default.div `
  position: relative;

  &::after {
    display: ${(p) => p.multiple ? 'none' : 'flex'};
    opacity: ${(p) => p.disabled ? '0.25' : '1'};
    content: "▼";
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    max-height: 100%;
    height: 100%;
    padding: 0 8px;
    font-size: 13px;
  }
`;
exports.StyledSelectOptionWrapper = StyledSelectOptionWrapper;
const StyledSelectOptionTitle = styled_components_1.default.p `
  margin: 0 0 4px 2px;
  user-select: ${(p) => helpers_1.setTheme(p.theme, 'userSelect')};
`;
exports.StyledSelectOptionTitle = StyledSelectOptionTitle;
//# sourceMappingURL=style.js.map