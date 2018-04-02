"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
const helpers_1 = require("../helpers");
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
        const { id, summary, defaultOpen = false, withSeparator, children } = this.props;
        const { open } = this.state;
        const maybeOpen = 'defaultOpen' in this.props ? (defaultOpen && open) : !!open;
        return (React.createElement("details", { id: id, open: maybeOpen },
            React.createElement("summary", { onClick: this.handleClick, className: helpers_1.applyClass({
                    summary: true,
                    summary__open: maybeOpen != null ? maybeOpen : false
                }) },
                summary,
                withSeparator && React.createElement(separator_1.default, null)),
            React.createElement("div", null, children),
            withSeparator && React.createElement(separator_1.default, null)));
    }
}
exports.default = ContentToggle;
//# sourceMappingURL=index.js.map