"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Anchor extends React.PureComponent {
    render() {
        const { id, href, target, theme, text } = this.props;
        return (React.createElement(style_1.default, { id: id, href: href, target: target, theme: theme, rel: 'noreferrer noopener' }, text && text.toString()));
    }
}
exports.default = Anchor;
//# sourceMappingURL=index.js.map