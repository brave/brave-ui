"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class ButtonSecondary extends React.PureComponent {
    render() {
        const { icon, text } = this.props;
        return (React.createElement(style_1.StyledWrapper, Object.assign({}, this.props),
            icon && icon.position === 'left'
                ? React.createElement(style_1.StyledIcon, { icon: icon }, icon.image)
                : null,
            text,
            icon && icon.position === 'right'
                ? React.createElement(style_1.StyledIcon, { icon: icon }, icon.image)
                : null));
    }
}
exports.default = ButtonSecondary;
//# sourceMappingURL=index.js.map