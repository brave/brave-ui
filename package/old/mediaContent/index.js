"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class MediaContent extends React.PureComponent {
    render() {
        const { id, media, theme, children } = this.props;
        return (React.createElement(style_1.StyledMediaContent, { id: id },
            React.createElement(style_1.StyledMedia, { src: media, theme: theme }),
            React.createElement(style_1.StyledMediaBody, { theme: theme }, children)));
    }
}
exports.default = MediaContent;
//# sourceMappingURL=index.js.map