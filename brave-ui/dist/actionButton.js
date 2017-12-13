"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
class ActionButton extends React.PureComponent {
    get componentStyles() {
        const { height, fontSize, color, padding } = this.props;
        return {
            '--height': height,
            '--fontSize': fontSize,
            '--color': color,
            '--padding': padding
        };
    }
    render() {
        const { id, onClick, text } = this.props;
        return (React.createElement("button", { id: id, className: no_important_1.css(styles.actionButton), onClick: onClick, style: this.componentStyles }, text.toString()));
    }
}
const styles = no_important_1.StyleSheet.create({
    actionButton: {
        display: 'block',
        padding: 'var(--padding, 0)',
        height: 'var(--height)',
        fontSize: 'var(--fontSize, inherit)',
        lineHeight: 1,
        background: 'none',
        color: 'var(--color, inherit)',
        border: 'none',
        cursor: 'pointer',
        outline: 'inherit'
    }
});
exports.default = ActionButton;
//# sourceMappingURL=actionButton.js.map