"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.StyledWrapper = styled_components_1.default.div `
  border-radius: 6px;
  box-shadow: 0 0 8px 0 rgba(99, 105, 110, 0.12);
  overflow: hidden;
  font-family: Poppins;
  width: 373px;
  background:
    url(${(p) => `"data:image/svg+xml,${p.bg}"`}) no-repeat top left,
    linear-gradient(172deg, #392dd1, rgba(255, 26, 26, 0.53)),
    linear-gradient(#7d7bdc, #7d7bdc);
`;
exports.StyledHeader = styled_components_1.default.div `
  padding: 16px 21px 0 19px;
  position: relative;
`;
exports.StyledTitle = styled_components_1.default.div `
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.65);
`;
exports.StyledBalance = styled_components_1.default.div `
  text-align: center;
`;
exports.StyledBalanceTitle = styled_components_1.default.div `
  font-size: 12px;
  font-weight: 500;
  line-height: 1.83;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #6cc7fd;
`;
exports.StyledBalanceTokens = styled_components_1.default.div `
  font-size: 36px;
  line-height: 0.61;
  letter-spacing: -0.4px;
  color: #fff;
  margin-top: 10px;
`;
exports.StyledContent = styled_components_1.default.div `
  padding: 31px 25px 19px;
  position: relative;
  background: #f9fbfc;
`;
exports.StyledAction = styled_components_1.default.span `
  display: inline-block;
`;
exports.StyledActionIcon = styled_components_1.default.img `
  display: inline-block;
  width: 20px;
  margin-right: 11px;
  vertical-align: text-bottom;
`;
exports.StyledCopy = styled_components_1.default.div `
  font-size: 12px;
  color: #838391;
  padding: 19px 15px;
  background: ${(p) => p.connectedWallet ? '#ccdfea' : '#dee2e6'};
  text-align: center;
`;
exports.StyledCopyImage = styled_components_1.default.span `
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
`;
exports.StyledIconAction = styled_components_1.default.div `
  margin-bottom: 17px;
  cursor:pointer;
  position: absolute;
  top: 21px;
  right: 21px;
`;
exports.StyledBalanceConverted = styled_components_1.default.div `
  font-family: Muli;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  margin: 15px 0 10px;
`;
exports.StyledGrantWrapper = styled_components_1.default.div `
  margin-top: 13px;
`;
exports.StyledGrant = styled_components_1.default.div `
  font-family: Muli;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.60);
  text-align: center;
  margin-bottom: 3px;

  b {
    font-weight: 600;
    color: #fff;
    min-width: 81px;
    text-align: right;
    display: inline-block;
  }

  span {
    min-width: 135px;
    text-align: left;
    display: inline-block;
  }
`;
exports.StyledActionWrapper = styled_components_1.default.div `
  text-align: center;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 0;
  padding-bottom: 20px;
`;
//# sourceMappingURL=style.js.map