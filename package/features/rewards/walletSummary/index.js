"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../listToken/index");
const helpers_1 = require("../../../helpers");
const activityIcon = require('./assets/activity');
class WalletSummary extends React.PureComponent {
    render() {
        const { id, grant, ads, contribute, donation, tips, onActivity } = this.props;
        const date = new Date();
        const month = helpers_1.getLocale(`month${date.toLocaleString('en-us', { month: 'short' })}`);
        const year = date.getFullYear();
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledSummary, null, helpers_1.getLocale('rewardsSummary')),
            React.createElement(style_1.StyledTitle, null,
                month,
                " ",
                year),
            React.createElement(style_1.StyledTokensWrapper, null,
                grant
                    ? React.createElement(index_1.default, { value: grant.tokens, converted: grant.converted, theme: { color: grant.color }, title: helpers_1.getLocale('tokenGrant') })
                    : null,
                ads
                    ? React.createElement(index_1.default, { value: ads.tokens, converted: ads.converted, theme: { color: ads.color }, title: helpers_1.getLocale('earningsAds') })
                    : null,
                React.createElement(index_1.default, { value: contribute.tokens, converted: contribute.converted, theme: { color: contribute.color }, title: helpers_1.getLocale('rewardsContribute'), isNegative: true }),
                donation
                    ? React.createElement(index_1.default, { value: donation.tokens, converted: donation.converted, theme: { color: donation.color }, title: helpers_1.getLocale('recurringDonations'), isNegative: true })
                    : null,
                tips
                    ? React.createElement(index_1.default, { value: tips.tokens, converted: tips.converted, theme: { color: tips.color, borderBottom: 'none' }, title: helpers_1.getLocale('oneTimeDonation'), isNegative: true })
                    : null),
            React.createElement(style_1.StyledActivity, { onClick: onActivity },
                React.createElement(style_1.StyledActivityIcon, null, activityIcon),
                " ",
                helpers_1.getLocale('viewMonthly'))));
    }
}
exports.default = WalletSummary;
//# sourceMappingURL=index.js.map