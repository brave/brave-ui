"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
const helpers_1 = require("../helpers");
class BrowserSelect extends React.PureComponent {
    render() {
        const { titleName, id, multiple = false, autoFocus, disabled = false, value, onChange, children } = this.props;
        return (React.createElement("div", null,
            React.createElement("p", { className: 'browserSelect_title' }, titleName),
            React.createElement("div", { className: helpers_1.applyClass({
                    browserSelectWrapper: !multiple,
                    browserSelectWrapper__disabled: disabled
                }) },
                React.createElement("select", { id: id, multiple: multiple, autoFocus: autoFocus, disabled: disabled, value: value, onChange: onChange, className: helpers_1.applyClass({
                        browserSelect: true,
                        browserSelect__multiple: multiple
                    }) }, children))));
    }
}
exports.default = BrowserSelect;
//# sourceMappingURL=index.js.map