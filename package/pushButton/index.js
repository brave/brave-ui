"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class PushButton extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledPushButton, { id: this.props.id, color: this.props.color ? this.props.color : 'default', onClick: this.props.onClick, disabled: this.props.disabled ? this.props.disabled : false, size: this.props.size, fontSize: this.props.fontSize }, this.props.children));
    }
}
exports.default = PushButton;
//# sourceMappingURL=index.js.map