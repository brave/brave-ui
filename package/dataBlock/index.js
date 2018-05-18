"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class DataBlock extends React.PureComponent {
    render() {
        const { id, list, children } = this.props;
        return (React.createElement(style_1.StyledDataBlock, { id: id, list: list }, children));
    }
}
exports.DataBlock = DataBlock;
class DataItem extends React.PureComponent {
    render() {
        const { id, color, counter, text, description, onClick, noSelect, size = 'medium' } = this.props;
        return (React.createElement(style_1.StyledDataItem, { id: id, color: color, onClick: onClick, noSelect: noSelect, size: size },
            React.createElement(style_1.StyledDataItemCounter, { color: color, size: size }, counter),
            text && React.createElement(style_1.StyledDataItemText, { size: size }, text),
            description && React.createElement(style_1.StyledDataItemDescription, { size: size }, description)));
    }
}
exports.DataItem = DataItem;
//# sourceMappingURL=index.js.map