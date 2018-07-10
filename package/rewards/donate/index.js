"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const amount_1 = require("../amount");
const helpers_1 = require("../../helpers");
const send = require('./assets/send');
const sadFace = require('./assets/sadFace');
class Donate extends React.PureComponent {
    constructor(props) {
        super(props);
        this.validateDonation = () => {
            if (this.validateAmount(this.props.balance)) {
                return;
            }
            if (this.props.onDonate) {
                this.props.onDonate(this.state.amount);
            }
        };
        this.onAmountChange = (tokens) => {
            this.setState({ amount: tokens });
            this.validateAmount(this.props.balance, tokens);
            if (this.props.onAmountSelection) {
                this.props.onAmountSelection(tokens);
            }
        };
        this.state = {
            amount: this.getCurrentAmount(this.props.donationAmounts),
            missingFunds: false
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.balance !== prevProps.balance ||
            this.props.donationAmounts !== prevProps.donationAmounts) {
            this.validateAmount(this.props.balance);
        }
        if (this.props.donationAmounts !== prevProps.donationAmounts) {
            this.setState({ amount: this.getCurrentAmount(this.props.donationAmounts) });
        }
    }
    getCurrentAmount(amounts) {
        const amount = amounts && amounts.find((amount) => !!amount.selected);
        return (amount && amount.tokens) || 0;
    }
    validateAmount(balance, tokens) {
        if (tokens == null) {
            tokens = this.state.amount;
        }
        const valid = tokens > balance;
        this.setState({ missingFunds: valid });
        return valid;
    }
    render() {
        const { id, donationAmounts, actionText, children, theme, title } = this.props;
        const disabled = this.state.amount === 0;
        const donateType = this.props.donateType ? this.props.donateType : 'big';
        const sendColor = disabled ? (helpers_1.setTheme(theme, 'disabledSendColor') || '#3e45b2') : '#a1a8f2';
        return React.createElement(style_1.StyledWrapper, null,
            React.createElement(style_1.StyledContent, { id: id, theme: theme },
                React.createElement(style_1.StyledDonationTitle, null, title),
                donationAmounts && donationAmounts.map((donation) => {
                    return React.createElement(amount_1.default, { key: `${id}-donate-${donation.tokens}`, amount: donation.tokens, selected: donation.selected, onClick: this.onAmountChange, converted: donation.converted, type: donateType });
                }),
                children),
            React.createElement(style_1.StyledSend, { disabled: disabled, onClick: this.validateDonation(), theme: theme },
                React.createElement(style_1.StyledIconSend, null, send(sendColor)),
                actionText),
            this.state.missingFunds
                ? React.createElement(style_1.StyledFunds, { theme: theme },
                    React.createElement(style_1.StyledIconFace, null, sadFace),
                    React.createElement(style_1.StyledFundsText, null,
                        "Not enough tokens. Please ",
                        React.createElement("a", { href: "#" }, "add funds"),
                        "."))
                : null);
    }
}
exports.default = Donate;
//# sourceMappingURL=index.js.map