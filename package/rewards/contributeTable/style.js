"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
`;
exports.StyledText = styled_components_1.default.div `
  font-family: Muli;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.29;
  text-align: right;
  color: #686978;
`;
exports.StyledRemove = styled_components_1.default.span `
  margin-left: 10px;
  padding-right: 7px;
`;
exports.StyledTHSite = styled_components_1.default.div `
`;
exports.StyledTHOther = styled_components_1.default.div `
  text-align: right;
`;
exports.StyledTHLast = styled_components_1.default(exports.StyledTHOther) `
  padding-right: 7px;
`;
exports.StyledToggle = styled_components_1.default.div `
  font-family: Poppins;
  font-size: 13px;
  color: #4c54d2;
  text-align: right;
  text-transform: capitalize;
`;
//# sourceMappingURL=style.js.map