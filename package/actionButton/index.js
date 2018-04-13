"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class ActionButton extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledActionButton, { id: this.props.id, onClick: this.props.onClick, height: this.props.height, fontSize: this.props.fontSize, color: this.props.color, padding: this.props.padding }, this.props.text ? this.props.text.toString() : null));
    }
}
exports.default = ActionButton;
//# sourceMappingURL=index.js.map