"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Image extends React.PureComponent {
    render() {
        const { id, theme, children, src, caption } = this.props;
        return (React.createElement(style_1.StyledPicture, { id: id, theme: theme },
            React.createElement(style_1.StyledFigure, null,
                children,
                React.createElement(style_1.StyledImage, { src: src, theme: theme })),
            caption && React.createElement(style_1.StyledFigcaption, null, caption)));
    }
}
exports.default = Image;
//# sourceMappingURL=index.js.map