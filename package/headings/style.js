"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const helpers_1 = require("../helpers");
const StyledSharedHeading = styled_components_1.default.span `
  box-sizing: border-box;
  font-family: inherit;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: default;
  font-family: inherit;
`;
const StyledHeadingTitle = StyledSharedHeading.withComponent('h1').extend `
  margin: 0;
  font-weight: 400;
  white-space: nowrap;
  font-size: 28px;
  color: rgb(255, 80, 0);
`;
exports.StyledHeadingTitle = StyledHeadingTitle;
const StyledHeadingTitleLabel = styled_components_1.default.sup `
  box-sizing: border-box;
  color: #999;
  font-size: 15px;
`;
exports.StyledHeadingTitleLabel = StyledHeadingTitleLabel;
const StyledSectionHeading = StyledSharedHeading.withComponent('h2').extend `
  color: rgb(68, 68, 68);
  font-size: 20px;
  margin: 0 0 20px;
  font-weight: 400;
`;
exports.StyledSectionHeading = StyledSectionHeading;
const StyledFeatureHeading = StyledSharedHeading.withComponent('h2').extend `
  color: #444444;
  font-weight: normal;
  font-size: 14px;
  margin: 18px 0 8px;
  min-width: 160px;
`;
exports.StyledFeatureHeading = StyledFeatureHeading;
const StyledH1 = styled_components_1.default.h1 `
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  color: ${(p) => helpers_1.setTheme(p.theme, 'color')};
  font-weight: ${(p) => helpers_1.setTheme(p.theme, 'fontWeight') || '400'};
  font-family: ${(p) => helpers_1.setTheme(p.theme, 'fontFamily') || 'inherit'};
  margin-top: 14px;
  margin-bottom: 22px;
  letter-spacing: -0.4px;
  font-size: 30px;
`;
exports.StyledH1 = StyledH1;
const StyledH2 = styled_components_1.default.h2 `
  /* TBD */
`;
exports.StyledH2 = StyledH2;
const StyledH3 = styled_components_1.default.h3 `
  /* TBD */
`;
exports.StyledH3 = StyledH3;
const StyledH4 = styled_components_1.default.h4 `
  /* TBD */
`;
exports.StyledH4 = StyledH4;
const StyledH5 = styled_components_1.default.h5 `
  /* TBD */
`;
exports.StyledH5 = StyledH5;
const StyledH6 = styled_components_1.default.h6 `
  /* TBD */
`;
exports.StyledH6 = StyledH6;
//# sourceMappingURL=style.js.map