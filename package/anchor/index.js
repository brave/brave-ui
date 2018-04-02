"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
const helpers_1 = require("../helpers");
class Anchor extends React.PureComponent {
    render() {
        const { id, href, noStyle = false, target, text } = this.props;
        return (React.createElement("a", { id: id, className: helpers_1.applyClass({
                anchor: true,
                anchor__noStyle: noStyle
            }), href: href, target: target, rel: 'noreferrer noopener' }, text.toString()));
    }
}
exports.default = Anchor;
//# sourceMappingURL=index.js.map