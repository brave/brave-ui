"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../components/buttonsIndicators/buttonSecondary/index");
const helpers_1 = require("../../../helpers");
const panel = require('./assets/panel');
const upholdIcon = require('./assets/uphold');
const upholdColorIcon = require('./assets/upholdColor');
const gearIcon = require('./assets/gear');
const arrowUpIcon = require('./assets/arrowUp');
const arrowDownIcon = require('./assets/arrowDown');
class Panel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleGrantDetails = () => {
            this.setState({ grantDetails: !this.state.grantDetails });
        };
        this.hasGrants = (grants) => {
            return grants && grants.length > 0;
        };
        this.state = {
            grantDetails: false
        };
    }
    formatTokens(tokens) {
        if (isNaN(tokens)) {
            return '00.00';
        }
        return tokens.toFixed(2);
    }
    generateActions(actions, id) {
        return actions && actions.map((action, i) => {
            return (React.createElement(style_1.StyledAction, { key: `${id}-${i}`, onClick: action.action },
                React.createElement(style_1.StyledActionIcon, { src: action.icon }),
                action.name));
        });
    }
    render() {
        const { id, children, tokens, converted, actions, showCopy, connectedWallet, showSecActions, grants, onSettingsClick } = this.props;
        const enabled = this.hasGrants(grants);
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledHeader, { bg: panel },
                React.createElement(style_1.StyledTitle, null, helpers_1.getLocale('yourWallet')),
                showSecActions
                    ? React.createElement(style_1.StyledIconAction, { onClick: onSettingsClick }, gearIcon)
                    : null,
                React.createElement(style_1.StyledBalance, null,
                    React.createElement(style_1.StyledBalanceTitle, null, helpers_1.getLocale('tokenBalance')),
                    React.createElement(style_1.StyledBalanceTokens, null, this.formatTokens(tokens)),
                    React.createElement(style_1.StyledBalanceConverted, null,
                        "~ ",
                        converted),
                    React.createElement(index_1.default, { text: helpers_1.getLocale('detail'), size: 'small', color: 'subtle', onClick: enabled ? this.toggleGrantDetails : undefined, disabled: !enabled, icon: { position: 'right', image: this.state.grantDetails && enabled ? arrowUpIcon : arrowDownIcon } })),
                this.state.grantDetails && enabled
                    ? React.createElement(style_1.StyledGrantWrapper, null, grants && grants.map((grant, i) => {
                        return React.createElement(style_1.StyledGrant, { key: `${id}-grant-${i}` },
                            React.createElement("b", null,
                                grant.tokens,
                                " ",
                                helpers_1.getLocale('tokens')),
                            " ",
                            React.createElement("span", null,
                                helpers_1.getLocale('expiresOn'),
                                " ",
                                grant.expireDate));
                    }))
                    : null,
                React.createElement(style_1.StyledActionWrapper, null, this.generateActions(actions, id))),
            React.createElement(style_1.StyledContent, null, children),
            showCopy
                ? React.createElement(style_1.StyledCopy, { connectedWallet: connectedWallet }, connectedWallet
                    ? React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledCopyImage, null, upholdColorIcon),
                        " ",
                        helpers_1.getLocale('rewardsPanelText1'),
                        " ",
                        React.createElement("b", null, "Uphold"),
                        ".")
                    : React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledCopyImage, null, upholdIcon),
                        " ",
                        helpers_1.getLocale('rewardsPanelText2'),
                        " ",
                        React.createElement("b", null, "Uphold"),
                        "."))
                : null));
    }
}
exports.default = Panel;
//# sourceMappingURL=index.js.map