"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const coins = require('./assets/coins');
class PanelEmpty extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledWrapper, { id: this.props.id },
            coins,
            React.createElement(style_1.StyledTitle, null, "Sadly, no tokens yet."),
            React.createElement(style_1.StyledContent, null,
                React.createElement("b", null, "3 ways to fill your wallet:"),
                React.createElement("br", null),
                "\u2022 You can add funds. ",
                React.createElement("br", null),
                "\u2022 You can earn tokens from Brave Ads.",
                React.createElement("br", null),
                "\u2022 Occasionally, you will also receive token grants from Brave. So keep an eye out for the alert!")));
    }
}
exports.default = PanelEmpty;
//# sourceMappingURL=index.js.map