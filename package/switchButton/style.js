"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const theme_1 = require("../theme");
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
  font-size: ${(p) => helpers_1.setSize(p, '24px', 'inherit', 'inherit')};
  margin-left: ${(p) => helpers_1.setSize(p, '18px', '10px', '10px')};
  margin-right: ${(p) => helpers_1.setSize(p, '18px', '10px', '10px')};
  font-weight: 400;
  font-family: inherit;
  color: inherit;
`;
exports.StyledSwitchButtonLabel = StyledSwitchButtonLabel;
const StyledSwitchButton = styled_components_1.default.input `
  box-sizing: border-box;
  -webkit-appearance: none;
  position: relative;
  width: ${(p) => helpers_1.setSize(p, '60px', '48px', '40px')};
  height: ${(p) => helpers_1.setSize(p, '26px', '16px', '14px')};
  border-radius: ${(p) => helpers_1.setSize(p, '26px', '16px', '14px')};
  border: 2px solid ${theme_1.default.switchButton.uncheckedBg};
  padding: 0 2px;
  background-color: white;
  outline: none;
  transition: linear 0.2s;
  box-shadow:
    inset
    -${(p) => helpers_1.setSize(p, '33px', '31px', '25px')} 0px 0px 0px
    ${theme_1.default.switchButton.uncheckedBg};

  &:checked {
    border: 2px solid ${theme_1.default.switchButton.checkedBg};
    box-shadow:
      inset
      ${(p) => helpers_1.setSize(p, '33px', '31px', '25px')} 0px 0px 0px
      ${theme_1.default.switchButton.checkedBg};
  }
`;
exports.StyledSwitchButton = StyledSwitchButton;
//# sourceMappingURL=style.js.map