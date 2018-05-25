"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("emptykit.css");
const style_1 = require("./style");
const headings_1 = require("../headings");
class Page extends React.PureComponent {
    render() {
        const { id, title, label, theme, children } = this.props;
        return (React.createElement(style_1.StyledPage, { id: id, title: title, label: label, theme: theme },
            title && React.createElement(headings_1.TitleHeading, { text: title, label: label }),
            React.createElement(style_1.StyledPageContent, null, children)));
    }
}
exports.default = Page;
//# sourceMappingURL=index.js.map