"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const defaultTheme_1 = require("../defaultTheme");
const helpers_1 = require("../helpers");
const StyledSwitchButtonWrapper = styled_components_1.default.div `
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: inherit;
  color: inherit;

  ${(p) => p.disabled && styled_components_1.css `
    opacity: 0.3;
    user-select: none;`}
`;
exports.StyledSwitchButtonWrapper = StyledSwitchButtonWrapper;
const StyledSwitchButtonLabel = styled_components_1.default.label `
  box-sizing: border-box;
  font-size: ${(p) => helpers_1.setValueBasedOnSize(p.size, 'inherit', 'inherit', '24px')};
  margin-left: ${(p) => helpers_1.setValueBasedOnSize(p.size, '10px', '10px', '18px')};
  margin-right: ${(p) => helpers_1.setValueBasedOnSize(p.size, '10px', '10px', '18px')};
  font-weight: 400;
  font-family: inherit;
  color: ${(p) => helpers_1.setTheme(p.theme, 'labelColor') || 'inherit'};
  user-select: ${(p) => helpers_1.setTheme(p.theme, 'userSelect') || 'none'};
`;
exports.StyledSwitchButtonLabel = StyledSwitchButtonLabel;
const StyledSwitchButton = styled_components_1.default.input `
  box-sizing: border-box;
  -webkit-appearance: none;
  position: relative;
  min-width: ${(p) => helpers_1.setValueBasedOnSize(p.size, '48px', '40px', '60px')};
  height: ${(p) => helpers_1.setValueBasedOnSize(p.size, '16px', '14px', '26px')};
  border-radius: ${(p) => helpers_1.setValueBasedOnSize(p.size, '16px', '14px', '26px')};
  border: 2px solid ${defaultTheme_1.default.switchButton.uncheckedBg};
  padding: 0 2px;
  background-color: white;
  outline: none;
  transition: linear 0.2s;
  box-shadow:
    inset
    -${(p) => helpers_1.setValueBasedOnSize(p.size, '31px', '25px', '33px')} 0px 0px 0px
    ${defaultTheme_1.default.switchButton.uncheckedBg};

  &:checked {
    border: 2px solid ${defaultTheme_1.default.switchButton.checkedBg};
    box-shadow:
      inset
      ${(p) => helpers_1.setValueBasedOnSize(p.size, '31px', '25px', '33px')} 0px 0px 0px
      ${defaultTheme_1.default.switchButton.checkedBg};
  }
`;
exports.StyledSwitchButton = StyledSwitchButton;
//# sourceMappingURL=style.js.map