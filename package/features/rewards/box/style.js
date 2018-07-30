"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../../helpers");
exports.StyledWrapper = styled_components_1.default.div `
  width: 100%;
  position: relative;
  height: auto;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(99, 105, 110, 0.12);
  padding: 30px 36px;
  margin-bottom: 28px;
  font-family: Poppins;
`;
exports.StyledFlip = styled_components_1.default.div `
  display: flex;
  width: 200%;
`;
exports.StyledContentWrapper = styled_components_1.default.div `
  display: flex;
  height: ${(p) => p.open ? 'auto' : '0'};
  flex-basis: ${(p) => p.open ? '50%' : '0'};
  flex-wrap: wrap;
  overflow: hidden;
`;
exports.StyledLeft = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
`;
exports.StyledRight = styled_components_1.default.div `
  flex-basis: 40px;
`;
exports.StyledTitle = styled_components_1.default.div `
  height: 36px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.27;
  letter-spacing: normal;
  color: ${(p) => {
    if (p.checked === false)
        return '#838391';
    return helpers_1.setTheme(p.theme, 'titleColor') || '#4b4c5c';
}}
`;
exports.StyledBreak = styled_components_1.default.div `
  width: 100%;
  display: block;
`;
exports.StyledDescription = styled_components_1.default.div `
  width: 100%;
  padding-right: 20px;
  font-family: Muli;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: normal;
  color: #a4aeb8;
`;
exports.StyledSettingsIcon = styled_components_1.default.span `
  width: 20px;
  float: ${(p) => p.float ? p.float : 'none'};
  margin-top: 8px;
`;
exports.StyledContent = styled_components_1.default.div `
  flex-basis: 100%;
  flex-grow: 1;
  margin-top: 25px;
`;
exports.StyledSettingsWrapper = styled_components_1.default.div `
  background: #fff;
  overflow: hidden;
  height: ${(p) => p.open ? 'auto' : '0'};
  flex-basis: ${(p) => p.open ? '50%' : '0'};
`;
exports.StyledSettingsClose = styled_components_1.default.div `
  display: ${(p) => p.open ? 'block' : 'none'};
  position: absolute;
  right: 35px;
  top: 35px;
  width: 13px;
  height: 13px;
`;
exports.StyledSettingsTitle = styled_components_1.default.div `
  text-align: center;
  margin-bottom: 15px;
`;
exports.StyledSettingsText = styled_components_1.default.span `
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #4b4c5c;
  position: relative;
  top: -4px;
  display: inline-block;
  margin-left: 20px;
`;
//# sourceMappingURL=style.js.map