"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../helpers");
class PanelOff extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledWrapper, { id: this.props.id },
            React.createElement(style_1.StyledTitle, null, helpers_1.getLocale('rewardsPanelOffText1')),
            React.createElement(style_1.StyledContent, null, helpers_1.getLocale('rewardsPanelOffText2'))));
    }
}
exports.default = PanelOff;
//# sourceMappingURL=index.js.map