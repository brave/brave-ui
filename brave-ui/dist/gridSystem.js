"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
exports.gridTemplate = 12;
class Grid extends React.PureComponent {
    get componentStyles() {
        const { padding, gap, width, height, textColor, background } = this.props;
        return {
            '--gridPadding': padding,
            '--gridGap': gap,
            '--gridWidth': width,
            '--gridHeight': height,
            '--gridTextColor': textColor,
            '--gridBackground': background
        };
    }
    render() {
        const { id, disabled, children } = this.props;
        return (React.createElement("div", { id: id, className: no_important_1.css(styles.grid, disabled && styles.grid__disabled), style: this.componentStyles }, children));
    }
}
exports.Grid = Grid;
const gridWrapper = {
    grid: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: `repeat(${exports.gridTemplate}, 1fr)`,
        gridGap: 'var(--gridGap, 15px)',
        padding: 'var(--gridPadding, 0)',
        maxWidth: 'var(--gridWidth)',
        height: 'var(--gridHeight)',
        color: 'var(--gridTextColor)',
        backgroundColor: 'var(--gridBackground)'
    },
    grid__disabled: {
        opacity: 0.3,
        userSelect: 'none'
    }
};
class Column extends React.PureComponent {
    get componentStyles() {
        const { props } = this;
        const needsFlex = 'align' in props || 'verticalAlign' in props;
        return {
            '--columnDisplay': needsFlex && 'flex',
            '--columnAlign': props.align,
            '--columnVerticalAlign': props.verticalAlign,
            '--columnBackground': props.background
        };
    }
    render() {
        const { id, size = exports.gridTemplate, children } = this.props;
        return (React.createElement("div", { id: id, className: no_important_1.css(styles[`column${size}`]), style: this.componentStyles }, children));
    }
}
exports.Column = Column;
let columnSystem = {};
Array.from({ length: exports.gridTemplate }, (v, i) => i + 1).forEach(size => {
    Object.assign(columnSystem, {
        [`column${size}`]: {
            boxSizing: 'border-box',
            position: 'relative',
            gridColumn: `span ${size}`,
            display: 'var(--columnDisplay, inherit)',
            justifyContent: 'var(--columnAlign)',
            alignItems: 'var(--columnVerticalAlign)',
            backgroundColor: 'var(--columnBackground)'
        }
    });
});
const gridSystem = Object.assign(gridWrapper, columnSystem);
const styles = no_important_1.StyleSheet.create(gridSystem);
//# sourceMappingURL=gridSystem.js.map