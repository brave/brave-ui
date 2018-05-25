"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class UnstyledButton extends React.PureComponent {
    render() {
        const { id, onClick, theme, text } = this.props;
        return (React.createElement(style_1.default, { id: id, theme: theme, onClick: onClick }, text ? text.toString() : null));
    }
}
exports.default = UnstyledButton;
//# sourceMappingURL=index.js.map