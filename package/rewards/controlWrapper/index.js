"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class ControlWrapper extends React.PureComponent {
    render() {
        const { id, title, children, theme } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id, theme: theme },
            title ? React.createElement(style_1.StyledTitle, null, title) : null,
            children));
    }
}
exports.default = ControlWrapper;
//# sourceMappingURL=index.js.map