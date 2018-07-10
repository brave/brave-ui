"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Tooltip extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onMouseEnter = () => {
            this.setState({ open: true });
        };
        this.onMouseLeave = () => {
            this.setState({ open: false });
        };
        this.state = {
            open: false
        };
    }
    get position() {
        let position = this.props.position;
        if (!position) {
            position = 'bottom';
        }
        return position;
    }
    render() {
        const { id, content, children, theme } = this.props;
        let position = this.position;
        return (React.createElement(style_1.StyledWrapper, { id: id, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
            React.createElement(style_1.StyledTooltip, { position: position, theme: theme, open: this.state.open },
                React.createElement(style_1.StyledArrow, { position: position, theme: theme }),
                React.createElement(style_1.StyledArrowOutline, { position: position, theme: theme }),
                content),
            children));
    }
}
exports.default = Tooltip;
//# sourceMappingURL=index.js.map