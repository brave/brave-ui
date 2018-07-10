"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class PanelOff extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledWrapper, { id: this.props.id },
            React.createElement(style_1.StyledTitle, null, "Get Rewarded for Browsing!"),
            React.createElement(style_1.StyledContent, null, "Earn tokens for your attention to ads and pay it forward to support content creators you value!")));
    }
}
exports.default = PanelOff;
//# sourceMappingURL=index.js.map