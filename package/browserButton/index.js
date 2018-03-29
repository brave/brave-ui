"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
require("../theme.css");
const helpers_1 = require("../helpers");
class BrowserButton extends React.PureComponent {
    get componentStyles() {
        const { size, fontSize } = this.props;
        return {
            '--size': size,
            '--fontSize': fontSize
        };
    }
    render() {
        const { id, theme = 'default', onClick, disabled = false, children } = this.props;
        return (React.createElement("button", { id: id, style: this.componentStyles, onClick: onClick, disabled: disabled, className: helpers_1.applyClass({
                browserButton: true,
                browserButton_defaultColor: theme === 'default',
                browserButton_primaryColor: theme === 'primary',
                browserButton_secondaryColor: theme === 'secondary',
                browserButton_disabled: disabled
            }) }, children));
    }
}
exports.default = BrowserButton;
//# sourceMappingURL=index.js.map