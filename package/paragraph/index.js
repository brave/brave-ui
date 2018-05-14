"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Paragraph extends React.PureComponent {
    render() {
        const { id, size, color, weight = 'normal', italic, text } = this.props;
        return (React.createElement(style_1.default, { id: id, size: size, color: color, weight: weight, italic: italic }, text && text.toString()));
    }
}
exports.default = Paragraph;
//# sourceMappingURL=index.js.map