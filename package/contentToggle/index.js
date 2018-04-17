"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const separator_1 = require("../separator");
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
        const maybeOpen = 'defaultOpen' in this.props
            ? (this.props.defaultOpen && this.state.open)
            : !!this.state.open;
        return (React.createElement("details", { id: this.props.id, open: maybeOpen },
            React.createElement(style_1.default, { onClick: this.handleClick, defaultOpen: this.props.defaultOpen ? this.props.defaultOpen : false, open: maybeOpen != null ? maybeOpen : false },
                this.props.summary,
                this.props.withSeparator ? React.createElement(separator_1.default, null) : null),
            React.createElement("div", null, this.props.children),
            this.props.withSeparator ? React.createElement(separator_1.default, null) : null));
    }
}
exports.default = ContentToggle;
//# sourceMappingURL=index.js.map