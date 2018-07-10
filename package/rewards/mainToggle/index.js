"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const toggle_1 = require("../toggle");
const logo = require('./assets/bat');
class MainToggle extends React.PureComponent {
    render() {
        const { id, enabled, onToggle } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledLeft, null,
                React.createElement(style_1.StyledLogo, null, logo),
                React.createElement(style_1.StyledTitle, null,
                    "Brave Rewards ",
                    React.createElement(style_1.StyledTM, null, "TM"))),
            React.createElement(style_1.StyledRight, null,
                React.createElement(toggle_1.default, { checked: enabled, onClick: onToggle, size: 'large' })),
            !enabled
                ? React.createElement(style_1.StyledContent, null,
                    React.createElement(style_1.StyleTitle, null, "Why Brave Rewards\u2026"),
                    React.createElement(style_1.StyleText, null,
                        "Do you know that you\u2019ve been paying for the web content with your data for the digital ads? You didn\u2019t have a voice in it and worse, you\u2019re exposed to privacy and security risks. ",
                        React.createElement("br", null),
                        React.createElement("b", null, "Brave Rewards allows you to take control back.")),
                    React.createElement(style_1.StyleTitle, null, "How does it work?"),
                    React.createElement(style_1.StyleText, null, "Your attention is valuable. Get paid for the ads. And pay directly the favorite content creators at your will. That way, they can grow and continue delivering the content that delights you."))
                : null));
    }
}
exports.default = MainToggle;
//# sourceMappingURL=index.js.map