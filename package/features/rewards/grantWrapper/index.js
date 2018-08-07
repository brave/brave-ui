"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const header = require('./assets/header');
const close = require('./assets/close');
class GrantWrapper extends React.PureComponent {
    render() {
        const { id, onClose, title, text, children } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledClose, { onClick: onClose }, close),
            React.createElement(style_1.StyledHeader, null, header),
            React.createElement(style_1.StyledTitle, null, title),
            React.createElement(style_1.StyledText, null, text),
            children));
    }
}
exports.default = GrantWrapper;
//# sourceMappingURL=index.js.map