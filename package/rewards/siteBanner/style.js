"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../../helpers");
const bg1 = require('./assets/bg_bats.svg');
const bg2 = require('./assets/bg_hearts.svg');
exports.StyledWrapper = styled_components_1.default.div `
  background-color: rgba(12, 13, 33, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  font-family: Poppins;
`;
exports.StyledContentWrapper = styled_components_1.default.div `
  display: flex; 
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: nowrap;
`;
exports.StyledContent = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(100% - 336px);
  background: #e9f0ff;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
`;
exports.StyledDonation = styled_components_1.default.div `
  flex-basis: 336px;
  background: #696fdc;
`;
exports.StyledBanner = styled_components_1.default.div `
  position: relative;
  min-width: 1024px;
`;
exports.StyledBannerImage = styled_components_1.default.div `
  font-size: ${(p) => !p.bgImage ? '38px' : 0};
  font-weight: 600;
  line-height: 0.74;
  color: #d1d1db;
  height: 176px;
  background: ${(p) => p.bgImage
    ? `url(${p.bgImage}) no-repeat top center / cover`
    : `url(${bg1}) no-repeat top left, url(${bg2}) no-repeat top right, #9e9fab`};
`;
exports.StyledClose = styled_components_1.default.div `
  top: 14px;
  right: 17px;
  position: absolute;
`;
exports.StyledLogoWrapper = styled_components_1.default.div `
  padding-left: 45px;
  flex-basis: 217px;
`;
exports.StyledLogoText = styled_components_1.default.div `
	background: inherit;
	-webkit-background-clip: text;
	color: transparent;
	filter: invert(1) grayscale(1) contrast(9);
  font-size: 80px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
`;
exports.StyledLogoBorder = styled_components_1.default.div `
  border: 6px solid #fff;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  background: ${(p) => helpers_1.setTheme(p.theme, 'logoBgColor') || '#DE4D26'};
  padding-top: ${(p) => p.padding ? '35px' : 0};
  margin: -66px 0 25px;
  overflow: hidden;
`;
exports.StyledTextWrapper = styled_components_1.default.div `
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(100% - 217px);
`;
exports.StyledTitle = styled_components_1.default.div `
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  color: #4b4c5c;
  margin: 41px 0 0;
`;
exports.StyledText = styled_components_1.default.div `
  font-family: Muli;
  font-size: 16px;
  line-height: 1.5;
  color: #686978;
  padding-right: 37px;
`;
exports.StyledRecurring = styled_components_1.default.div `
  flex-basis: 100%;
  font-size: 14px;
  line-height: 2;
  color: #9e9fab;
  background: #fff;
  height: 56px;
  padding: 13px 0 0 45px;
`;
exports.StyledRemove = styled_components_1.default.span `
  font-family: Muli;
  font-size: 14px;
  line-height: 1.29;
  color: #d1d1db;
  display: inline-block;
  margin-left: 15px;
`;
exports.StyledWallet = styled_components_1.default.div `
  font-size: 12px;
  color: #afb2f1;
  text-align: right;
  margin: 8px 0 10px;
  padding: 0 19px 0 55px;
`;
exports.StyledTokens = styled_components_1.default.span `
  color: #fff;
`;
exports.StyledLogoImage = styled_components_1.default.img `
`;
exports.StyledIconRecurring = styled_components_1.default.span `
  display: inline-block;
  margin-left: 6px;
`;
exports.StyledOption = styled_components_1.default.span `
  color: rgba(255, 255, 255, 0.65);
`;
exports.StyledCenter = styled_components_1.default.div `
  max-width: 1024px;
  padding: 126px 0 0 238px;
  margin: 0 auto;
`;
exports.StyledIconRecurringBig = styled_components_1.default.span `
  vertical-align: top;
  display: inline-block;
  margin-right: 5px;
`;
exports.StyledIconRemove = styled_components_1.default.span `
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
`;
exports.StyledSocialItem = styled_components_1.default.a `
  font-size: 12px;
  line-height: 2.5;
  letter-spacing: 0.2px;
  color: #9e9fab;
  display: block;
  text-decoration: none;
`;
exports.StyledSocialIcon = styled_components_1.default.span `
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
`;
//# sourceMappingURL=style.js.map