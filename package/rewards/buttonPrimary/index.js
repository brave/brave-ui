"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class ButtonPrimary extends React.PureComponent {
    render() {
        const { size, color, disabled, icon, text } = this.props;
        return (React.createElement(style_1.StyledWrapper, Object.assign({}, this.props),
            React.createElement(style_1.StyledContent, { size: size, color: color, disabled: disabled },
                icon && icon.position === 'left'
                    ? React.createElement(style_1.StyledIcon, { icon: icon }, icon.image)
                    : null,
                text,
                icon && icon.position === 'right'
                    ? React.createElement(style_1.StyledIcon, { icon: icon }, icon.image)
                    : null)));
    }
}
exports.default = ButtonPrimary;
//# sourceMappingURL=index.js.map