"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class PushButton extends React.PureComponent {
    render() {
        const { id, color, theme, onClick, disabled, children } = this.props;
        return (React.createElement(style_1.default, { id: id, color: color ? color : 'default', theme: theme, onClick: onClick, disabled: disabled ? disabled : false }, children));
    }
}
exports.default = PushButton;
//# sourceMappingURL=index.js.map