"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../../helpers");
const buttonPrimary_1 = require("../../../components/buttonsIndicators/buttonPrimary");
class GrantComplete extends React.PureComponent {
    render() {
        const { id, onClose, amount, date } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledBox, null,
                React.createElement(style_1.StyledTitle, null, helpers_1.getLocale('newTokenGrant')),
                React.createElement(style_1.StyledValue, null, amount),
                React.createElement(style_1.StyledTitle, null, helpers_1.getLocale('grantExpire')),
                React.createElement(style_1.StyledValue, null, date)),
            React.createElement(style_1.StyledText, null, helpers_1.getLocale('grantDisclaimer')),
            React.createElement(buttonPrimary_1.default, { text: helpers_1.getLocale('ok'), size: 'medium', color: 'brand', onClick: onClose })));
    }
}
exports.default = GrantComplete;
//# sourceMappingURL=index.js.map