"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
class Anchor extends React.PureComponent {
    render() {
        const { id, href, noStyle, target, text } = this.props;
        return (React.createElement("a", { id: id, className: no_important_1.css(styles.anchor, noStyle && styles.anchor__noStyle), href: href, target: target, rel: 'noreferrer noopener' }, text.toString()));
    }
}
const styles = no_important_1.StyleSheet.create({
    anchor: {
        color: 'inherit',
        fontSize: 'inherit'
    },
    anchor__noStyle: {
        textDecoration: 'none'
    }
});
exports.default = Anchor;
//# sourceMappingURL=anchor.js.map