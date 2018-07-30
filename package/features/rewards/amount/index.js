"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../../helpers");
const logo = require('./assets/logo');
class Amount extends React.PureComponent {
    render() {
        const { id, onSelect, amount, selected, type } = this.props;
        const converted = this.props.converted || 0;
        const currency = this.props.currency || 'USD';
        return (React.createElement(style_1.StyledWrapper, { id: id, onClick: onSelect.bind(this, amount) },
            React.createElement(style_1.StyledAmount, { selected: selected, type: type },
                React.createElement(style_1.StyledLogo, null, logo),
                amount,
                " ",
                React.createElement(style_1.StyledTokens, null, type === 'big' ? 'tokens' : null)),
            React.createElement(style_1.StyledConverted, { selected: selected, type: type },
                helpers_1.getLocale('about'),
                " ",
                converted.toFixed(2),
                " ",
                currency)));
    }
}
exports.default = Amount;
//# sourceMappingURL=index.js.map