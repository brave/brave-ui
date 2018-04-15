"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class BrowserSelect extends React.PureComponent {
    render() {
        return (React.createElement("div", null,
            React.createElement(style_1.StyledBrowserSelectTitle, null, this.props.titleName),
            React.createElement(style_1.StyledBrowserSelectWrapper, { multiple: this.props.multiple ? this.props.disabled : false, disabled: this.props.disabled ? this.props.disabled : false },
                React.createElement(style_1.StyledBrowserSelect, { id: this.props.id, multiple: this.props.multiple ? this.props.disabled : false, autoFocus: this.props.autoFocus, disabled: this.props.disabled ? this.props.disabled : false, value: this.props.value, onChange: this.props.onChange }, this.props.children))));
    }
}
exports.default = BrowserSelect;
//# sourceMappingURL=index.js.map