"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Tokens extends React.PureComponent {
    render() {
        const { id, converted, value, currency, hideText, isNegative, theme } = this.props;
        const defaultCurrency = 'USD';
        return (React.createElement("span", { id: id },
            React.createElement(style_1.StyledTokens, { theme: theme },
                React.createElement(style_1.StyledTokenValue, { theme: theme },
                    isNegative ? '-' : '',
                    value),
                " ",
                !hideText ? React.createElement("span", null, "tokens") : null),
            converted
                ? React.createElement(style_1.StyledContent, { theme: theme },
                    "~ ",
                    converted,
                    " ",
                    currency || defaultCurrency)
                : null));
    }
}
exports.default = Tokens;
//# sourceMappingURL=index.js.map