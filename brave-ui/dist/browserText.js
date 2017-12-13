"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
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
        return (React.createElement("p", { id: id, className: no_important_1.css(styles.browserTextStyles), onClick: onClick, style: this.componentStyles }, text.toString()));
    }
}
const browserTextStyles = {
    userSelect: 'var(--noSelect)',
    fontWeight: 'var(--bold)',
    padding: 'var(--padding, 0)',
    cursor: 'var(--cursor, auto)',
    fontSize: 'var(--fontSize, 13px)',
    color: 'var(--color, inherit)',
    background: 'none',
    margin: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
};
const styles = no_important_1.StyleSheet.create({ browserTextStyles });
exports.default = BrowserText;
//# sourceMappingURL=browserText.js.map