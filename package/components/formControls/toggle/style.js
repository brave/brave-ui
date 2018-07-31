"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  position: relative;
  display: block;

  ${(p) => p.disabled
    ? styled_components_1.css `
      pointer-events: none;
      animation: none;
      opacity: 0.25;
    ` : ''};

  ${(p) => p.size === 'small'
    ? styled_components_1.css `
      width: 20px;
      height: 11px;
    ` : ''};


  ${(p) => p.size === 'medium'
    ? styled_components_1.css `
      width: 30px;
      height: 18px;
    ` : ''};

  ${(p) => p.size === 'large'
    ? styled_components_1.css `
      width: 40px;
      height: 24px;
    ` : ''};
`;
exports.StyledSlider = styled_components_1.default.div `
  background: #A7ACB2;
  width: 100%;
  border-radius: 3px;

  ${(p) => p.size === 'small'
    ? styled_components_1.css `
      height: 4px;
      margin-top: 4.5px;
    ` : ''};

  ${(p) => p.size === 'medium'
    ? styled_components_1.css `
      height: 6px;
      margin-top: 6px;
    ` : ''};

  ${(p) => p.size === 'large'
    ? styled_components_1.css `
      height: 8px;
      margin-top: 8px;
    ` : ''};
`;
exports.StyledBullet = styled_components_1.default.div `
  position: relative;
  z-index: 2;
  border-radius: 50%;
  transition: 200ms ease-out;

  ${(p) => p.checked
    ? styled_components_1.css `
      background-color: ${(p) => helpers_1.setTheme(p.theme, 'onColor') || '#6D73D2'};
    ` : ''};

  ${(p) => !p.checked
    ? styled_components_1.css `
      background-color: ${(p) => helpers_1.setTheme(p.theme, 'offColor') || '#CDD1D5'};
      transform: translate(0, calc(-50% - 4px));
    ` : ''};

  ${(p) => p.size === 'small'
    ? styled_components_1.css `
      width: 11px;
      height: 11px;
      transform: translate(0, calc(-50% - 2px));
    ` : ''};


  ${(p) => p.checked && p.size === 'small'
    ? styled_components_1.css `
      transform: translate(9px, calc(-50% - 2px));
    ` : ''};

  ${(p) => p.size === 'medium'
    ? styled_components_1.css `
      width: 18px;
      height: 18px;
    ` : ''};

  ${(p) => p.checked && p.size === 'medium'
    ? styled_components_1.css `
      transform: translate(12px, calc(-50% - 4px));
    ` : ''};

  ${(p) => p.size === 'large'
    ? styled_components_1.css `
      width: 24px;
      height: 24px;
    ` : ''};

  ${(p) => p.checked && p.size === 'large'
    ? styled_components_1.css `
      transform: translate(16px, calc(-50% - 4px));
    ` : ''};
`;
//# sourceMappingURL=style.js.map