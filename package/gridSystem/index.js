"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
const helpers_1 = require("../helpers");
exports.gridTemplate = 12;
class Grid extends React.PureComponent {
    get componentStyles() {
        const { columns, padding, gap, width, height, textColor, background } = this.props;
        return {
            '--gridTemplateColumns': columns || exports.gridTemplate,
            '--gridPadding': padding,
            '--gridGap': gap,
            '--gridWidth': width,
            '--gridHeight': height,
            '--gridTextColor': textColor,
            '--gridBackground': background
        };
    }
    render() {
        const { id, disabled = false, children } = this.props;
        return (React.createElement("div", { id: id, className: helpers_1.applyClass({
                grid: true,
                grid__disabled: disabled
            }), style: this.componentStyles }, children));
    }
}
exports.Grid = Grid;
class Column extends React.PureComponent {
    get componentStyles() {
        const { props } = this;
        const needsFlex = ('align' in props ||
            'verticalAlign' in props ||
            'direction' in props);
        return {
            '--columnSize': 'size' in props ? `span ${props.size}` : `span ${exports.gridTemplate}`,
            '--columnDisplay': needsFlex && 'flex',
            '--columnAlign': props.align,
            '--columnVerticalAlign': props.verticalAlign,
            '--columnBackground': props.background,
            '--columnDirection': props.direction
        };
    }
    render() {
        const { id, children } = this.props;
        return (React.createElement("div", { id: id, className: 'column', style: this.componentStyles }, children));
    }
}
exports.Column = Column;
//# sourceMappingURL=index.js.map