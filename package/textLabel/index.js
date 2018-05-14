"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class TextLabel extends React.PureComponent {
    render() {
        const { id, onClick, size, color, padding, noSelect, weight, text } = this.props;
        return (React.createElement(style_1.default, { id: id, onClick: onClick, size: size, color: color, padding: padding, noSelect: noSelect, weight: weight, text: text }, text && text.toString()));
    }
}
exports.default = TextLabel;
//# sourceMappingURL=index.js.map