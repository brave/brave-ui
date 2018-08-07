"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../../helpers");
const gift = require('./assets/gift');
class GrantClaim extends React.PureComponent {
    render() {
        const { id, onClick } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledIcon, null, gift),
            React.createElement(style_1.StyledText, null, helpers_1.getLocale('newGrant')),
            React.createElement(style_1.StyledClaim, { onClick: onClick }, helpers_1.getLocale('claim'))));
    }
}
exports.default = GrantClaim;
//# sourceMappingURL=index.js.map