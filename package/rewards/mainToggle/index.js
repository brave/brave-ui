"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const toggle_1 = require("../toggle");
const helpers_1 = require("../../helpers");
const logo = require('./assets/bat');
class MainToggle extends React.PureComponent {
    render() {
        const { id, enabled, onToggle } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledLeft, null,
                React.createElement(style_1.StyledLogo, null, logo),
                React.createElement(style_1.StyledTitle, null,
                    helpers_1.getLocale('braveRewards'),
                    " ",
                    React.createElement(style_1.StyledTM, null, "TM"))),
            React.createElement(style_1.StyledRight, null,
                React.createElement(toggle_1.default, { checked: enabled, onClick: onToggle, size: 'large' })),
            !enabled
                ? React.createElement(style_1.StyledContent, null,
                    React.createElement(style_1.StyleTitle, null, helpers_1.getLocale('rewardsWhy')),
                    React.createElement(style_1.StyleText, null,
                        helpers_1.getLocale('rewardsOffText1'),
                        " ",
                        React.createElement("br", null),
                        React.createElement("b", null, helpers_1.getLocale('rewardsOffText2'))),
                    React.createElement(style_1.StyleTitle, null, helpers_1.getLocale('rewardsOffText3')),
                    React.createElement(style_1.StyleText, null, helpers_1.getLocale('rewardsOffText4')))
                : null));
    }
}
exports.default = MainToggle;
//# sourceMappingURL=index.js.map