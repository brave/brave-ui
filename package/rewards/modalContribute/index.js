"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const modal_1 = require("../modal");
const contributeTable_1 = require("../contributeTable");
class ModalContribute extends React.PureComponent {
    get headers() {
        return [
            'Site visited',
            'Your attention metric'
        ];
    }
    render() {
        const { id, onClose, rows } = this.props;
        const numSites = rows && rows.length || 0;
        return (React.createElement(modal_1.default, { id: id, onClose: onClose },
            React.createElement(style_1.StyledWrapper, null,
                React.createElement(style_1.StyledTitle, null, "Brave Contribute"),
                React.createElement(style_1.StyledContent, null,
                    "You\u2019re currently supporting ",
                    React.createElement(style_1.StyledNum, null, numSites),
                    " sites."),
                React.createElement(contributeTable_1.default, { header: this.headers, rows: rows, numSites: numSites, allSites: true, showRowAmount: true }))));
    }
}
exports.default = ModalContribute;
//# sourceMappingURL=index.js.map