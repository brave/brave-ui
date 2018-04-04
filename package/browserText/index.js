"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
class BrowserText extends React.PureComponent {
    get componentStyles() {
        const { fontSize, color, padding, noSelect, bold } = this.props;
        return {
            '--fontSize': fontSize,
            '--color': color,
            '--padding': padding,
            '--noSelect': noSelect && 'none',
            '--cursor': noSelect && 'default',
            '--bold': bold && 'bold'
        };
    }
    render() {
        const { id, onClick, text } = this.props;
        return (React.createElement("p", { id: id, className: 'browserTextStyles', onClick: onClick, style: this.componentStyles }, text != null
            ? text.toString()
            : null));
    }
}
exports.default = BrowserText;
//# sourceMappingURL=index.js.map