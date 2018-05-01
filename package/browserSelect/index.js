"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class BrowserSelect extends React.PureComponent {
    render() {
        const { titleName, id, multiple = false, autoFocus = false, disabled = false, value, onChange, children } = this.props;
        return (React.createElement("div", null,
            React.createElement(style_1.StyledBrowserSelectTitle, null, titleName),
            React.createElement(style_1.StyledBrowserSelectWrapper, { multiple: multiple, disabled: disabled },
                React.createElement(style_1.StyledBrowserSelect, { id: id, multiple: multiple, autoFocus: autoFocus, disabled: disabled, value: value, onChange: onChange }, children))));
    }
}
exports.default = BrowserSelect;
//# sourceMappingURL=index.js.map