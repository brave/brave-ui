"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const donate_1 = require("../donate");
const checkbox_1 = require("../checkbox");
const close = require('./assets/close');
const monthly = require('./assets/monthly');
class SiteBanner extends React.PureComponent {
    constructor(props) {
        super(props);
        this.getSocial = (social) => {
            if (!social || social.length === 0) {
                return null;
            }
            const self = this;
            return social.map((item) => {
                const icon = require(`./assets/${item.type}`);
                return React.createElement(style_1.StyledSocialItem, { key: `${self.props.id}-social-${item.type}`, href: self.getSocialLink(item), target: '_blank' },
                    React.createElement(style_1.StyledSocialIcon, null, icon),
                    " ",
                    item.name || item.handler);
            });
        };
        this.onDonate = (amount) => {
            if (this.props.onDonate) {
                this.props.onDonate(amount, this.state.monthly);
            }
        };
        this.state = {
            monthly: false
        };
    }
    getLogo(logo, domain) {
        return !logo
            ? React.createElement(style_1.StyledLogoText, null, (domain && domain.substring(0, 1)) || '')
            : React.createElement(style_1.StyledLogoImage, { src: logo });
    }
    getSocialLink(item) {
        switch (item.type) {
            case 'twitter':
                return `https://twitter.com/${item.handler}`;
            case 'youtube':
                return `https://www.youtube.com/channel/${item.handler}`;
            case 'twitch':
                return `https://www.twitch.tv/${item.handler}`;
        }
        return '';
    }
    getTitle(title) {
        return title ? title : 'Welcome!';
    }
    getText(children) {
        if (!children) {
            return React.createElement(React.Fragment, null,
                React.createElement("p", null, "Thanks for stopping by. We joined Brave\u2019s vision of protecting your privacy because we believe that fans like you would support us in our effort to keep the web a clean and safe place to be."),
                React.createElement("p", null, "Your donation is much appreciated and it encourages us to continue to improve our content."));
        }
        return children;
    }
    onMonthlyChange(key, selected) {
        this.setState({ monthly: selected });
    }
    render() {
        const { id, bgImage, onClose, logo, social, children, title, currentDonation, balance, donationAmounts, domain, onAmountSelection, theme } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledBanner, null,
                React.createElement(style_1.StyledClose, { onClick: onClose }, close),
                React.createElement(style_1.StyledBannerImage, { bgImage: bgImage },
                    React.createElement(style_1.StyledCenter, null, domain)),
                React.createElement(style_1.StyledContentWrapper, null,
                    React.createElement(style_1.StyledContent, null,
                        React.createElement(style_1.StyledLogoWrapper, null,
                            React.createElement(style_1.StyledLogoBorder, { padding: !logo, theme: theme }, this.getLogo(logo, domain)),
                            this.getSocial(social)),
                        React.createElement(style_1.StyledTextWrapper, null,
                            React.createElement(style_1.StyledTitle, null, this.getTitle(title)),
                            React.createElement(style_1.StyledText, null, this.getText(children))),
                        currentDonation && !isNaN(currentDonation) && currentDonation > 0
                            ? React.createElement(style_1.StyledRecurring, null,
                                React.createElement(style_1.StyledIconRecurringBig, null, monthly('#696fdc')),
                                "You're currently donating ",
                                currentDonation,
                                " BAT to this site every month.",
                                React.createElement(style_1.StyledRemove, null,
                                    React.createElement(style_1.StyledIconRemove, null, close),
                                    "remove"))
                            : null),
                    React.createElement(style_1.StyledDonation, null,
                        React.createElement(style_1.StyledWallet, null,
                            "wallet balance ",
                            React.createElement(style_1.StyledTokens, null,
                                balance,
                                " tokens")),
                        React.createElement(donate_1.default, { balance: balance, donationAmounts: donationAmounts, title: 'Donation amount', onDonate: this.onDonate, actionText: 'Send my donation', onAmountSelection: onAmountSelection, theme: {
                                paddingFunds: '13px 12px 13px 24px',
                                paddingSend: '16px 19px 16px 55px',
                                paddingBox: '0 19px 0 55px'
                            } },
                            React.createElement(checkbox_1.default, { value: { make: this.state.monthly }, onChange: this.onMonthlyChange.bind(this), theme: { checkColor: '#fff', borderColor: '#a1a8f2' } },
                                React.createElement("div", { "data-key": 'make' },
                                    React.createElement(style_1.StyledOption, null, "Make this monthly"),
                                    " ",
                                    React.createElement(style_1.StyledIconRecurring, null, monthly())))))))));
    }
}
exports.default = SiteBanner;
//# sourceMappingURL=index.js.map