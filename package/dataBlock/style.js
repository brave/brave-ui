"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const StyledDataBlock = styled_components_1.default.ul `
  box-sizing: border-box;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`;
exports.StyledDataBlock = StyledDataBlock;
const StyledDataItem = styled_components_1.default.li `
  box-sizing: border-box;
  margin-right: 40px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: middle;
  list-style-type: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`;
exports.StyledDataItem = StyledDataItem;
const StyledDataItemCounter = styled_components_1.default.span `
  box-sizing: border-box;
  color: ${(p) => p.color || 'inherit'}
  letter-spacing: -0.4px;
  font-size: 44px;
  font-family: inherit;
  line-height: 53px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 200px;
`;
exports.StyledDataItemCounter = StyledDataItemCounter;
const StyledDataItemText = styled_components_1.default.span `
  box-sizing: border-box;
  display: inline;
  color: inherit;
  font-size: 20px;
  font-family: inherit;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 3px;
`;
exports.StyledDataItemText = StyledDataItemText;
const StyledDataItemDescription = styled_components_1.default.div `
  box-sizing: border-box;
  font-size: 13px;
  font-family: inherit;
  color: inherit;
  margin-left: 3px;
`;
exports.StyledDataItemDescription = StyledDataItemDescription;
//# sourceMappingURL=style.js.map