"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../helpers");
const check = require('./assets/check');
const arrow = require('./assets/arrow');
exports.StyledWrapper = styled_components_1.default.div `
  max-width: ${(p) => helpers_1.setTheme(p.theme, 'maxWidth') || '254px'};
  width: 100%;
`;
exports.StyledSelectWrapper = styled_components_1.default.div `
  position: relative;
  outline: 0;
  font-family: Poppins;
`;
exports.StyledSelect = styled_components_1.default.div `
  border-radius: 3px;
  font-size: 14px;
  color: #686978;
  background: #fff;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: ${(p) => helpers_1.setTheme(p.theme, 'padding') || '10px 31px 10px 13px'};
  border: ${(p) => helpers_1.setTheme(p.theme, 'border') || '1px solid #dfdfe8'};
  background: url("data:image/svg+xml,${arrow}") no-repeat right ${(p) => helpers_1.setTheme(p.theme, 'arrowPadding') || '15px'} center #fff;
  
  ${(p) => p.show
    ? styled_components_1.css `
      border-color: #a1a8f2;
    ` : ''}
`;
exports.StyledOptions = styled_components_1.default.div `
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #fff;
  border: solid 1px #dfdfe8;
  overflow: hidden;
  z-index: 2;
  display: ${(p) => p.show ? 'block' : 'none'};
`;
exports.StyledOption = styled_components_1.default.div `
  font-size: 14px;
  line-height: 2.57;
  color: #1b1d2f;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1px 21px 0 30px;
  
  ${(p) => p.selected
    ? styled_components_1.css `
      background: url("data:image/svg+xml,${check}") no-repeat 14px 12px #e9f0ff;
    ` : ''};
`;
//# sourceMappingURL=style.js.map