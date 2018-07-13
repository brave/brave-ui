"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../helpers");
const newTheme_1 = require("../newTheme");
const StyledPushButton = styled_components_1.default.button `
  font-size: ${(p) => helpers_1.setValueBasedOnSize(p.size, '13px', undefined, '16px')};
  min-width: ${(p) => helpers_1.setValueBasedOnSize(p.size, '112px', undefined, '190px')};
  min-height: ${(p) => helpers_1.setValueBasedOnSize(p.size, '40px', undefined, '52px')};
  border-radius: ${(p) => helpers_1.setValueBasedOnSize(p.size, '20px', undefined, '32px')};
  text-transform: ${(p) => helpers_1.setTheme(p.theme, 'textTransform')};
  line-height: ${(p) => helpers_1.setValueBasedOnSize(p.size, '26px', undefined, '42px')};
  text-decoration: none;
  font-family: inherit;
  position: relative;
  display: inline-block;
  text-align: center;
  box-shadow: none;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: none;
  line-height: 1.25;
  width: auto;
  white-space: nowrap;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  -webkit-app-region: no-drag;
  cursor: pointer;
  user-select: none;
  transition: .1s opacity, .1s background;
  letter-spacing: 0.46px;

  &:active {
    bottom: -1px;
  }

  ${(p) => p.disabled
    ? styled_components_1.css `
    pointer-events: none;
    animation: none;
    opacity: 0.25;
    ` : ''}

  ${(p) => p.color === 'default'
    ? styled_components_1.css `
      color: ${newTheme_1.default.pushButton.default.color};
      stroke: ${newTheme_1.default.pushButton.default.color};
      background-color: ${newTheme_1.default.pushButton.default.bg};

      &:hover {
        color: ${newTheme_1.default.pushButton.default.hoverColor};
      }
    `
    : ''}

  ${(p) => p.color === 'primary'
    ? styled_components_1.css `
      background: ${newTheme_1.default.pushButton.primary.background};
      color: ${newTheme_1.default.pushButton.primary.color};
      stroke: ${newTheme_1.default.pushButton.primary.color};

      &:hover {
        opacity: 0.9;
      }
    ` : ''}

  ${(p) => p.color === 'secondary'
    ? styled_components_1.css `
      background: ${newTheme_1.default.pushButton.secondary.background};
      border: 2px solid ${newTheme_1.default.pushButton.secondary.borderColor};
      color: ${newTheme_1.default.pushButton.secondary.color};
      stroke: ${newTheme_1.default.pushButton.secondary.color};

      &:hover {
        border: 2px solid ${newTheme_1.default.pushButton.secondary.borderHoverColor};
        color: ${newTheme_1.default.pushButton.secondary.hoverColor};
        stroke: ${newTheme_1.default.pushButton.secondary.hoverColor};
      }
    ` : ''}
`;
exports.StyledPushButton = StyledPushButton;
const StyledPushButtonLink = StyledPushButton.withComponent('a');
exports.StyledPushButtonLink = StyledPushButtonLink;
//# sourceMappingURL=style.js.map