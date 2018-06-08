"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class DataBlock extends React.PureComponent {
    render() {
        const { id, asList, children } = this.props;
        return (React.createElement(style_1.StyledDataBlock, { id: id, asList: asList }, children));
    }
}
exports.DataBlock = DataBlock;
class DataItem extends React.PureComponent {
    render() {
        const { id, theme, counter, text, description, onClick, size = 'medium' } = this.props;
        return (React.createElement(style_1.StyledDataItem, { id: id, theme: theme, onClick: onClick, size: size },
            React.createElement(style_1.StyledDataItemCounter, { theme: theme, size: size }, counter),
            text && React.createElement(style_1.StyledDataItemText, { theme: theme, size: size }, text),
            description && React.createElement(style_1.StyledDataItemDescription, { theme: theme, size: size }, description)));
    }
}
exports.DataItem = DataItem;
//# sourceMappingURL=index.js.map