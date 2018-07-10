"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class List extends React.PureComponent {
    render() {
        const { id, title, children, theme } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledTitle, null, title),
            React.createElement(style_1.StyledContentWrapper, null,
                React.createElement(style_1.StyledContent, { theme: theme }, children))));
    }
}
exports.default = List;
//# sourceMappingURL=index.js.map