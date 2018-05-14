"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Grid extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledGrid, { id: this.props.id, disabled: this.props.disabled ? this.props.disabled : false, columns: this.props.columns, padding: this.props.padding, gap: this.props.gap, width: this.props.width, height: this.props.height, textColor: this.props.textColor, background: this.props.background }, this.props.children));
    }
}
exports.Grid = Grid;
class Column extends React.PureComponent {
    render() {
        return (React.createElement(style_1.StyledColumn, { id: this.props.id, size: this.props.size, align: this.props.align, verticalAlign: this.props.verticalAlign, background: this.props.background, direction: this.props.direction }, this.props.children));
    }
}
exports.Column = Column;
//# sourceMappingURL=index.js.map