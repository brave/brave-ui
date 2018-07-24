"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class SettingsPage extends React.PureComponent {
    render() {
        const { id, children } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyleHeader, null),
            React.createElement(style_1.StyledContent, null, children)));
    }
}
exports.default = SettingsPage;
//# sourceMappingURL=index.js.map