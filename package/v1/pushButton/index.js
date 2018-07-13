"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class PushButton extends React.PureComponent {
    render() {
        const { id, color, size, theme, onClick, disabled, children } = this.props;
        return (React.createElement(style_1.StyledPushButton, { id: id, color: color ? color : 'default', size: size ? size : 'medium', theme: theme, onClick: onClick, disabled: disabled ? disabled : false }, children));
    }
}
exports.PushButton = PushButton;
class PushButtonLink extends React.PureComponent {
    render() {
        const { id, color, size, theme, href, target, disabled, children } = this.props;
        return (React.createElement(style_1.StyledPushButtonLink, { id: id, color: color ? color : 'default', size: size ? size : 'medium', theme: theme, href: href, target: target, disabled: disabled ? disabled : false, rel: 'noreferrer noopener' }, children));
    }
}
exports.PushButtonLink = PushButtonLink;
//# sourceMappingURL=index.js.map