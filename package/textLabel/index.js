"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class TextLabel extends React.PureComponent {
    render() {
        const { id, onClick, theme, text } = this.props;
        return (React.createElement(style_1.default, { id: id, onClick: onClick, theme: theme }, text && text.toString()));
    }
}
exports.default = TextLabel;
//# sourceMappingURL=index.js.map