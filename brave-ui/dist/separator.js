"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
class Separator extends React.PureComponent {
    get componentStyles() {
        const { noMargin } = this.props;
        return {
            '--separatorMargin': noMargin && 0
        };
    }
    render() {
        return (React.createElement("hr", { className: no_important_1.css(styles.separator), style: this.componentStyles }));
    }
}
const styles = no_important_1.StyleSheet.create({
    separator: {
        background: '#ccc',
        border: '0px',
        height: '1px',
        marginTop: 'var(--separatorMargin, 10px)',
        marginBottom: 'var(--separatorMargin, 10px)'
    }
});
exports.default = Separator;
//# sourceMappingURL=separator.js.map