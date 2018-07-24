"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const tokens_1 = require("../tokens");
const listToken_1 = require("../listToken");
const helpers_1 = require("../../helpers");
const coinsIcon = require('./assets/coins');
const activityIcon = require('./assets/activity');
class PanelSummary extends React.PureComponent {
    render() {
        const { id, grant, ads, contribute, donation, tips, grants, onClaim, onActivity } = this.props;
        const date = new Date();
        const month = helpers_1.getLocale(`month${date.toLocaleString('en-us', { month: "short" })}`);
        const year = date.getFullYear();
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledSummary, null, helpers_1.getLocale('rewardsSummary')),
            React.createElement(style_1.StyledTitle, null,
                month,
                " ",
                year),
            React.createElement(style_1.StyledTokensWrapper, null,
                React.createElement(listToken_1.default, { value: grant.tokens, converted: grant.converted, theme: { color: grant.color }, title: helpers_1.getLocale('tokenGrant') }),
                React.createElement(listToken_1.default, { value: ads.tokens, converted: ads.converted, theme: { color: ads.color }, title: helpers_1.getLocale('earningsAds') }),
                React.createElement(listToken_1.default, { value: contribute.tokens, converted: contribute.converted, theme: { color: contribute.color }, title: helpers_1.getLocale('rewardsContribute'), isNegative: true }),
                React.createElement(listToken_1.default, { value: donation.tokens, converted: donation.converted, theme: { color: donation.color }, title: helpers_1.getLocale('recurringDonations'), isNegative: true }),
                React.createElement(listToken_1.default, { value: tips.tokens, converted: tips.converted, theme: { color: tips.color, borderBottom: 'none' }, title: helpers_1.getLocale('oneTimeDonation'), isNegative: true })),
            React.createElement(style_1.StyledGrantTitle, null,
                React.createElement(style_1.StyledGrantIcon, null, coinsIcon),
                " ",
                helpers_1.getLocale('tokenGrant')),
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
                    React.createElement(style_1.StyledGrantClaim, { onClick: onClaim && onClaim.bind(this, grant.id) }, helpers_1.getLocale('claim')));
            }),
            !grants || grants.length === 0
                ? React.createElement(style_1.StyledGrantEmpty, null, helpers_1.getLocale('noGrants'))
                : null,
            React.createElement(style_1.StyledActivity, { onClick: onActivity },
                React.createElement(style_1.StyledActivityIcon, null, activityIcon),
                " ",
                helpers_1.getLocale('walletActivity'))));
    }
}
exports.default = PanelSummary;
//# sourceMappingURL=index.js.map