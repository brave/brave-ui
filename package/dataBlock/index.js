"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class DataBlock extends React.PureComponent {
    render() {
        const { id, children } = this.props;
        return (React.createElement(style_1.StyledDataBlock, { id: id }, children));
    }
}
exports.DataBlock = DataBlock;
class DataItem extends React.PureComponent {
    render() {
        const { id, color, counter, text, description } = this.props;
        return (React.createElement(style_1.StyledDataItem, { id: id, color: color },
            React.createElement(style_1.StyledDataItemCounter, { color: color }, counter),
            text && React.createElement(style_1.StyledDataItemText, null, text),
            React.createElement(style_1.StyledDataItemDescription, null, description)));
    }
}
exports.DataItem = DataItem;
//# sourceMappingURL=index.js.map