"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Anchor extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledAnchor, { id: this.props.id, noStyle: this.props.noStyle ? this.props.noStyle : false, href: this.props.href, target: this.props.target, rel: 'noreferrer noopener' }, this.props.text != null
            ? this.props.text.toString()
            : null));
    }
}
exports.default = Anchor;
//# sourceMappingURL=index.js.map