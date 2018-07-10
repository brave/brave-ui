"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const tokens_1 = require("../tokens");
class ListToken extends React.PureComponent {
    render() {
        const { id, title, value, theme, converted, isNegative } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id, theme: theme },
            React.createElement(style_1.StyledTitle, { theme: theme }, title),
            React.createElement(style_1.StyledContentWrapper, null,
                React.createElement(tokens_1.default, { value: value, converted: converted, isNegative: isNegative, theme: {
                        color: {
                            tokenNum: theme && theme.color || '#686978',
                            token: '#686978',
                            text: '#9E9FAB'
                        },
                        size: {
                            text: '10px',
                            token: '14px'
                        }
                    } }))));
    }
}
exports.default = ListToken;
//# sourceMappingURL=index.js.map