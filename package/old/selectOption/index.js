"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class SelectOption extends React.PureComponent {
    render() {
        const { titleName, id, multiple = false, autoFocus = false, disabled = false, value, onChange, children } = this.props;
        return (React.createElement("div", null,
            React.createElement(style_1.StyledSelectOptionTitle, null, titleName),
            React.createElement(style_1.StyledSelectOptionWrapper, { multiple: multiple, disabled: disabled },
                React.createElement(style_1.StyledSelectOption, { id: id, multiple: multiple, autoFocus: autoFocus, disabled: disabled, value: value, onChange: onChange }, children))));
    }
}
exports.default = SelectOption;
//# sourceMappingURL=index.js.map