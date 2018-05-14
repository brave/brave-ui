"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class MediaContent extends React.PureComponent {
    render() {
        const { id, media, mediaSize, gap, children } = this.props;
        return (React.createElement(style_1.StyledMediaContent, { id: id, mediaSize: mediaSize, gap: gap },
            React.createElement(style_1.StyledMedia, { src: media, mediaSize: mediaSize }),
            React.createElement(style_1.StyledMediaBody, { gap: gap }, children)));
    }
}
exports.default = MediaContent;
//# sourceMappingURL=index.js.map