"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class BrowserText extends React.PureComponent {
    render() {
        return (React.createElement(style_1.default, { id: this.props.id, onClick: this.props.onClick, fontSize: this.props.fontSize, color: this.props.color, padding: this.props.padding, noSelect: this.props.noSelect, bold: this.props.bold, text: this.props.text }, this.props.text != null ? this.props.text.toString() : null));
    }
}
exports.default = BrowserText;
//# sourceMappingURL=index.js.map