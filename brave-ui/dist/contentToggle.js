"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
const separator_1 = require("./separator");
class ContentToggle extends React.PureComponent {
    constructor(props) {
        super(props);
        const open = 'open' in props ? props.open : props.defaultOpen;
        this.state = { open };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if ('open' in nextProps) {
            this.setState({ open: nextProps.open });
        }
    }
    handleClick(e) {
        const { props } = this;
        if (!('open' in props)) {
            this.setState({ open: e.target.open });
        }
        props.onClick({ target: { open: e.target.open } });
    }
    render() {
        const { id, summary, defaultOpen, withSeparator, children } = this.props;
        const { open } = this.state;
        const maybeOpen = 'defaultOpen' in this.props ? (defaultOpen && open) : !!open;
        return (React.createElement("details", { id: id, open: maybeOpen },
            React.createElement("summary", { onClick: this.handleClick, className: no_important_1.css(styles.summary, maybeOpen && styles.summary__open) },
                summary,
                withSeparator && React.createElement(separator_1.default, null)),
            React.createElement("div", null, children),
            withSeparator && React.createElement(separator_1.default, null)));
    }
}
const styles = no_important_1.StyleSheet.create({
    summary: {
        display: 'block',
        '::-webkit-details-marker': {
            display: 'none'
        },
        '::before': {
            content: '"▶"',
            paddingRight: '0.5em'
        }
    },
    summary__open: {
        '::before': {
            content: '"▼"'
        }
    }
});
exports.default = ContentToggle;
//# sourceMappingURL=contentToggle.js.map