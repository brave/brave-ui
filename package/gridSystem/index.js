"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Grid extends React.PureComponent {
    render() {
        const { id, disabled, columns, theme, children } = this.props;
        return (React.createElement(style_1.StyledGrid, { id: id, disabled: disabled || false, theme: theme, columns: columns }, children));
    }
}
exports.Grid = Grid;
class Column extends React.PureComponent {
    render() {
        const { id, size, theme, children } = this.props;
        return (React.createElement(style_1.StyledColumn, { id: id, size: size, theme: theme }, children));
    }
}
exports.Column = Column;
//# sourceMappingURL=index.js.map