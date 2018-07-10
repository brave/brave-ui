"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Toggle extends React.PureComponent {
    render() {
        const { id, onClick, size, disabled, checked, theme } = this.props;
        const props = {
            id,
            disabled,
            checked,
            size: size ? size : 'medium'
        };
        if (!disabled) {
            props.onClick = onClick;
        }
        return (React.createElement(style_1.StyledWrapper, Object.assign({}, props),
            React.createElement(style_1.StyledSlider, { size: props.size }),
            React.createElement(style_1.StyledBullet, { size: props.size, checked: checked, theme: theme })));
    }
}
exports.default = Toggle;
//# sourceMappingURL=index.js.map