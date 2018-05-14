"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class BoxedContent extends React.PureComponent {
    render() {
        const { id, width, margin, children } = this.props;
        return (React.createElement(style_1.default, { id: id, width: width, margin: margin }, children));
    }
}
exports.default = BoxedContent;
//# sourceMappingURL=index.js.map