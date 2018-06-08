"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledDataBlock = styled_components_1.default.ul `
  box-sizing: border-box;
  display: ${(p) => !p.asList ? 'inline-block' : 'block'};
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  & > li {
    display: ${(p) => p.asList ? 'flex' : 'inline-block'};
    align-items: ${(p) => p.asList ? 'center' : null};
    min-height: ${(p) => p.asList ? '30px' : null};
    margin-right: ${(p) => p.asList ? '0' : '40px'};
    margin-bottom: ${(p) => p.asList ? '0' : '20px'};
  }
`;
exports.StyledDataBlock = StyledDataBlock;
const StyledDataItem = styled_components_1.default.li `
  user-select: ${(p) => helpers_1.setTheme(p.theme, 'userSelect') || 'auto'};
  box-sizing: border-box;
  vertical-align: middle;
  list-style-type: none;
  font-size: inherit;
  font-family: inherit;
`;
exports.StyledDataItem = StyledDataItem;
const StyledDataItemCounter = styled_components_1.default.span `
  color: ${(p) => helpers_1.setTheme(p.theme, 'counterColor') || 'inherit'};
  font-size: ${(p) => helpers_1.setValueBasedOnSize(p.size, '44px', '26px', undefined)};
  line-height: ${(p) => helpers_1.setValueBasedOnSize(p.size, '52px', '24px', undefined)};
  width: ${(p) => helpers_1.setValueBasedOnSize(p.size, '7ch', '3ch', undefined)};
  text-align: ${(p) => p.size === 'small' ? 'right' : 'inherit'};
  box-sizing: border-box;
  letter-spacing: -0.4px;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
exports.StyledDataItemCounter = StyledDataItemCounter;
const StyledDataItemText = styled_components_1.default.span `
  color: ${(p) => helpers_1.setTheme(p.theme, 'counterColor') || 'inherit'};
  font-size: ${(p) => helpers_1.setValueBasedOnSize(p.size, '20px', '13px', undefined)};
  line-height: ${(p) => helpers_1.setValueBasedOnSize(p.size, '24px', '16px', undefined)};
  margin-left: ${(p) => helpers_1.setValueBasedOnSize(p.size, '3px', '10px', undefined)};
  box-sizing: border-box;
  display: inline;
  font-family: inherit;
  letter-spacing: 0;
`;
exports.StyledDataItemText = StyledDataItemText;
const StyledDataItemDescription = styled_components_1.default.div `
  box-sizing: border-box;
  font-size: 13px;
  line-height: ${(p) => helpers_1.setValueBasedOnSize(p.size, '24px', '16px', undefined)};
  font-family: inherit;
  color: ${(p) => helpers_1.setTheme(p.theme, 'descriptionColor') || 'inherit'};
  margin-left: ${(p) => helpers_1.setValueBasedOnSize(p.size, '3px', '1ch', undefined)};
`;
exports.StyledDataItemDescription = StyledDataItemDescription;
//# sourceMappingURL=style.js.map