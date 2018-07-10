"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const donate_1 = require("../donate");
const toggle_1 = require("../toggle");
const close = require('./assets/close');
class Tip extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onDonate = (amount) => {
            if (this.props.onDonate) {
                this.props.onDonate(amount, this.props.allow);
            }
        };
        this.onToggle = () => {
            if (this.props.onAllow) {
                this.props.onAllow(!this.props.allow);
            }
        };
        this.onAmountChange = (tokens) => {
            if (this.props.onAmountSelection) {
                this.props.onAmountSelection(tokens);
            }
        };
    }
    render() {
        const { id, title, balance, donationAmounts, allow, onClose, provider } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledClose, { onClick: onClose }, close),
            React.createElement(style_1.StyledTitle, null, "Send my tip to"),
            React.createElement(donate_1.default, { title: title || '', actionText: 'Send my Tip', balance: balance, donationAmounts: donationAmounts, onAmountSelection: this.onAmountChange, onDonate: this.onDonate, donateType: 'small', theme: {
                    sendBgColor: '#392dd1',
                    paddingBox: '0 0 0 23px',
                    paddingSend: '16px 0 16px 51px',
                    paddingFunds: '16px 0 17px 25px',
                    disabledSendColor: '#1a22a8'
                } },
                React.createElement(style_1.StyledAllow, null,
                    React.createElement(style_1.StyledAllowText, null,
                        "Allow tips on ",
                        provider),
                    React.createElement(style_1.StyledAllowToggle, null,
                        React.createElement(toggle_1.default, { onClick: this.onToggle, checked: allow, theme: { onColor: '#fb542b', offColor: '#fb542b' }, size: 'small' }))))));
    }
}
exports.default = Tip;
//# sourceMappingURL=index.js.map