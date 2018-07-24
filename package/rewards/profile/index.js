"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../helpers");
const verifiedIcon = require('./assets/verified');
class Profile extends React.PureComponent {
    getProviderName(provider) {
        switch (provider) {
            case 'youtube':
                return `${helpers_1.getLocale('on')} YouTube`;
            case 'twitter':
                return `${helpers_1.getLocale('on')} Twitter`;
            case 'twitch':
                return `${helpers_1.getLocale('on')} Twitch`;
        }
    }
    getSrc(src) {
        return src ? src : '';
    }
    render() {
        const { id, type, provider, src, title, verified } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledImageWrapper, null,
                React.createElement(style_1.StyledImage, { src: this.getSrc(src), type: type }),
                verified && type === 'small'
                    ? React.createElement(style_1.StyledVerified, null, verifiedIcon)
                    : null),
            React.createElement(style_1.StyledContent, { type: type },
                React.createElement(style_1.StyledTitleWrap, { type: type },
                    React.createElement(style_1.StyledTitle, { type: type }, title),
                    provider
                        ? React.createElement(style_1.StyledProvider, { type: type }, this.getProviderName(provider))
                        : null),
                verified && type === 'big'
                    ? React.createElement(style_1.StyledProviderWrap, null,
                        React.createElement(style_1.StyledInlineVerified, null, verifiedIcon),
                        " ",
                        helpers_1.getLocale('verifiedPublisher'))
                    : null)));
    }
}
exports.default = Profile;
//# sourceMappingURL=index.js.map