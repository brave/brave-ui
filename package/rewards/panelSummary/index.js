"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const tokens_1 = require("../tokens");
const listToken_1 = require("../listToken");
const coinsIcon = require('./assets/coins');
const activityIcon = require('./assets/activity');
class PanelSummary extends React.PureComponent {
    render() {
        const { id, grant, ads, contribute, donation, tips, grants, onClaim, onActivity } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledSummary, null, "Rewards Summary"),
            React.createElement(style_1.StyledTitle, null, "May 2018"),
            React.createElement(style_1.StyledTokensWrapper, null,
                React.createElement(listToken_1.default, { value: grant.tokens, converted: grant.converted, theme: { color: grant.color }, title: 'Token Grant' }),
                React.createElement(listToken_1.default, { value: ads.tokens, converted: ads.converted, theme: { color: ads.color }, title: 'Earnings from Brave Ads' }),
                React.createElement(listToken_1.default, { value: contribute.tokens, converted: contribute.converted, theme: { color: contribute.color }, title: 'Brave Contribute', isNegative: true }),
                React.createElement(listToken_1.default, { value: donation.tokens, converted: donation.converted, theme: { color: donation.color }, title: 'Recurring Donations', isNegative: true }),
                React.createElement(listToken_1.default, { value: tips.tokens, converted: tips.converted, theme: { color: tips.color, borderBottom: 'none' }, title: 'One-time Donations/Tips', isNegative: true })),
            React.createElement(style_1.StyledGrantTitle, null,
                React.createElement(style_1.StyledGrantIcon, null, coinsIcon),
                " Token Grant"),
            grants && grants.map((grant, i) => {
                return React.createElement(style_1.StyledGrant, { key: `${id}-grant-${i}` },
                    React.createElement(style_1.StyledGrantText, null,
                        React.createElement(tokens_1.default, { value: grant.tokens, converted: grant.converted, theme: {
                                color: {
                                    text: 'rgba(255, 255, 255, 0.65)',
                                    token: '#fff',
                                    tokenNum: '#fff'
                                },
                                size: {
                                    token: '22px',
                                    text: '14px'
                                }
                            } })),
                    React.createElement(style_1.StyledGrantClaim, { onClick: onClaim && onClaim.bind(grant.id) }, "Claim"));
            }),
            !grants || grants.length === 0
                ? React.createElement(style_1.StyledGrantEmpty, null, "Currently no token grant is available.")
                : null,
            React.createElement(style_1.StyledActivity, { onClick: onActivity },
                React.createElement(style_1.StyledActivityIcon, null, activityIcon),
                " Wallet Activity/ Monthly Statement")));
    }
}
exports.default = PanelSummary;
//# sourceMappingURL=index.js.map