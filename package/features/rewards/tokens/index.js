"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Tokens extends React.PureComponent {
    render() {
        const { id, converted, value, hideText, isNegative, theme } = this.props;
        const currency = this.props.currency || 'USD';
        const toFixed = this.props.toFixed === undefined ? true : this.props.toFixed;
        return (React.createElement("span", { id: id },
            React.createElement(style_1.StyledTokens, { theme: theme },
                React.createElement(style_1.StyledTokenValue, { theme: theme },
                    isNegative ? '-' : '',
                    toFixed ? value.toFixed(2) : value),
                !hideText
                    ? React.createElement(style_1.StyledTokenCurrency, { theme: theme }, "BAT")
                    : null),
            converted
                ? React.createElement(style_1.StyledContent, { theme: theme },
                    toFixed ? converted.toFixed(2) : converted,
                    " ",
                    currency)
                : null));
    }
}
exports.default = Tokens;
//# sourceMappingURL=index.js.map