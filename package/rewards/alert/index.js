"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const success = require('./assets/success');
const error = require('./assets/error');
const close = require('./assets/close');
class Alert extends React.PureComponent {
    get icon() {
        switch (this.props.type) {
            case 'error':
                return error;
            case 'success':
                return success;
        }
        return null;
    }
    render() {
        const { id, children, onClose, theme } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id, theme: theme },
            React.createElement(style_1.StyledIcon, null, this.icon),
            React.createElement(style_1.StyledContent, null, children),
            onClose
                ? React.createElement(style_1.StyledClose, null, close)
                : null));
    }
}
exports.default = Alert;
//# sourceMappingURL=index.js.map