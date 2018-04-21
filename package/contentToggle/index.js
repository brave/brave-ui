"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const separator_1 = require("../separator");
class ContentToggle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { open: props.open != null ? props.open : props.defaultOpen };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if ('open' in nextProps) {
            this.setState({ open: nextProps.open });
        }
    }
    handleClick(e) {
        this.setState((prevState) => ({ open: !prevState.open }));
        this.props.onClick({
            target: {
                open: this.state.open,
                id: e.target.id
            }
        });
    }
    render() {
        const { id, summary, withSeparator, children } = this.props;
        const { open } = this.state;
        return (React.createElement(style_1.StyledContentToggle, { id: id, open: open, withSeparator: withSeparator },
            React.createElement(style_1.StyledContentToggleControl, { id: `${id}Control`, open: open, onClick: this.handleClick },
                withSeparator && React.createElement(separator_1.default, null),
                React.createElement(style_1.StyledContentToggleSummary, null, summary),
                withSeparator && React.createElement(separator_1.default, null)),
            React.createElement(style_1.StyledContentToggleContent, { open: open }, children)));
    }
}
exports.default = ContentToggle;
//# sourceMappingURL=index.js.map