"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../helpers");
class Tokens extends React.PureComponent {
    render() {
        const { id, converted, value, hideText, isNegative, theme } = this.props;
        const currency = this.props.currency || 'USD';
        return (React.createElement("span", { id: id },
            React.createElement(style_1.StyledTokens, { theme: theme },
                React.createElement(style_1.StyledTokenValue, { theme: theme },
                    isNegative ? '-' : '',
                    value),
                " ",
                !hideText ? React.createElement("span", null, helpers_1.getLocale('tokens')) : null),
            converted
                ? React.createElement(style_1.StyledContent, { theme: theme },
                    "~ ",
                    converted,
                    " ",
                    currency)
                : null));
    }
}
exports.default = Tokens;
//# sourceMappingURL=index.js.map