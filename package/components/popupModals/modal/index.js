"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const close = require('./assets/close');
class Modal extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.outsideClose = (e) => {
            if (!this.props.outsideClose) {
                return;
            }
            if (this.props.onClose && (e.target && e.target.id === this.props.id)) {
                this.props.onClose();
            }
        };
    }
    render() {
        const { id, onClose, children, theme } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id || 'modal', onClick: this.outsideClose },
            React.createElement(style_1.StyledDialog, { theme: theme },
                React.createElement(style_1.StyledClose, { onClick: onClose }, close),
                React.createElement(style_1.StyledContent, null, children))));
    }
}
exports.default = Modal;
//# sourceMappingURL=index.js.map