"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class BoxedContent extends React.PureComponent {
    render() {
        const { id, theme, children } = this.props;
        return (React.createElement(style_1.default, { id: id, theme: theme }, children));
    }
}
exports.default = BoxedContent;
//# sourceMappingURL=index.js.map