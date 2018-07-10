"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const buttonSecondary_1 = require("../buttonSecondary");
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
            return React.createElement(style_1.StyledAction, { key: `${id}-${i}`, onClick: action.action },
                React.createElement(style_1.StyledActionIcon, { src: action.icon }),
                action.name);
        });
    }
    render() {
        const { id, children, tokens, converted, actions, showCopy, connectedWallet, showSecActions, grants, onSettingsClick } = this.props;
        const enabled = this.hasGrants(grants);
        return React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledHeader, { bg: panel },
                React.createElement(style_1.StyledTitle, null, "Your wallet"),
                showSecActions
                    ? React.createElement(style_1.StyledIconAction, { onClick: onSettingsClick }, gearIcon)
                    : null,
                React.createElement(style_1.StyledBalance, null,
                    React.createElement(style_1.StyledBalanceTitle, null, "Token balance"),
                    React.createElement(style_1.StyledBalanceTokens, null, this.formatTokens(tokens)),
                    React.createElement(style_1.StyledBalanceConverted, null,
                        "~ ",
                        converted),
                    React.createElement(buttonSecondary_1.default, { text: 'Detail', size: 'small', color: 'subtle', onClick: enabled ? this.toggleGrantDetails : undefined, disabled: !enabled, icon: { position: 'right', image: this.state.grantDetails && enabled ? arrowUpIcon : arrowDownIcon } })),
                this.state.grantDetails && enabled
                    ? React.createElement(style_1.StyledGrantWrapper, null, grants && grants.map((grant, i) => {
                        return React.createElement(style_1.StyledGrant, { key: `${id}-grant-${i}` },
                            React.createElement("b", null,
                                grant.tokens,
                                " tokens"),
                            " ",
                            React.createElement("span", null,
                                "expires on ",
                                grant.expireDate));
                    }))
                    : null,
                React.createElement(style_1.StyledActionWrapper, null, this.generateActions(actions, id))),
            React.createElement(style_1.StyledContent, null, children),
            showCopy
                ? React.createElement(style_1.StyledCopy, { connectedWallet: connectedWallet }, connectedWallet
                    ? React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledCopyImage, null, upholdColorIcon),
                        " Add, withdraw and manage funds at ",
                        React.createElement("b", null, "Uphold"),
                        ".")
                    : React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledCopyImage, null, upholdIcon),
                        " Brave wallet is managed by ",
                        React.createElement("b", null, "Uphold"),
                        "."))
                : null);
    }
}
exports.default = Panel;
//# sourceMappingURL=index.js.map