"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
class ActionButton extends React.PureComponent {
    get componentStyles() {
        const { height, fontSize, color, padding } = this.props;
        return {
            '--height': height,
            '--fontSize': fontSize,
            '--color': color,
            '--padding': padding
        };
    }
    render() {
        const { id, onClick, text } = this.props;
        return (React.createElement("button", { id: id, className: 'actionButton', onClick: onClick, style: this.componentStyles }, text && text.toString()));
    }
}
exports.default = ActionButton;
//# sourceMappingURL=index.js.map