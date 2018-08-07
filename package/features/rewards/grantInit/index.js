"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const helpers_1 = require("../../../helpers");
const buttonPrimary_1 = require("../../../components/buttonsIndicators/buttonPrimary");
const buttonGhost_1 = require("../../../components/buttonsIndicators/buttonGhost");
class GrantInit extends React.PureComponent {
    render() {
        const { id, onAccept, onLater } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement("div", null,
                React.createElement(buttonPrimary_1.default, { text: helpers_1.getLocale('accept'), size: 'medium', color: 'brand', onClick: onAccept })),
            React.createElement(buttonGhost_1.default, { text: helpers_1.getLocale('maybeLater'), size: 'large', color: 'brand', onClick: onLater })));
    }
}
exports.default = GrantInit;
//# sourceMappingURL=index.js.map