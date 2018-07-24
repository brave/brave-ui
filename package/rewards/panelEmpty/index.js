"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../helpers");
const coins = require('./assets/coins');
class PanelEmpty extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledWrapper, { id: this.props.id },
            coins,
            React.createElement(style_1.StyledTitle, null, helpers_1.getLocale('rewardsPanelEmptyText1')),
            React.createElement(style_1.StyledContent, null,
                React.createElement("b", null, helpers_1.getLocale('rewardsPanelEmptyText2')),
                React.createElement("br", null),
                "\u2022 ",
                helpers_1.getLocale('rewardsPanelEmptyText3'),
                React.createElement("br", null),
                "\u2022 ",
                helpers_1.getLocale('rewardsPanelEmptyText4'),
                React.createElement("br", null),
                "\u2022 ",
                helpers_1.getLocale('rewardsPanelEmptyText5'))));
    }
}
exports.default = PanelEmpty;
//# sourceMappingURL=index.js.map