"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
class BrowserSelect extends React.PureComponent {
    render() {
        const { titleName, id, multiple, autoFocus, disabled, value, onChange, children } = this.props;
        return (React.createElement("div", null,
            React.createElement("p", { className: no_important_1.css(styles.browserSelect_title) }, titleName),
            React.createElement("div", { className: no_important_1.css(styles.browserSelectWrapper, disabled && styles.browserSelectWrapper__disabled) },
                React.createElement("select", { id: id, multiple: multiple, autoFocus: autoFocus, disabled: disabled, value: value, onChange: onChange, className: no_important_1.css(styles.browserSelect) }, children))));
    }
}
const styles = no_important_1.StyleSheet.create({
    browserSelect: {
        boxSizing: 'border-box',
        position: 'relative',
        borderRadius: '4px',
        boxShadow: '0px 2px 8px -5px rgba(0, 0, 0, 1)',
        display: 'block',
        color: 'rgb(68, 68, 68)',
        fontSize: '13px',
        border: 'solid 1px rgba(0, 0, 0, 0.2)',
        outline: 'none',
        padding: '0.4em 1.5em 0.4em 0.4em',
        width: '100%',
        backgroundColor: '#fbfbfb',
        backgroundSize: '12px 12px',
        WebkitAppearance: 'none',
        height: '2rem',
        marginBottom: '.75rem'
    },
    browserSelect_title: {
        margin: '0 0 .25rem .25rem'
    },
    browserSelectWrapper: {
        position: 'relative',
        '::after': {
            content: '"▼"',
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding: '10px',
            fontSize: '13px'
        }
    },
    browserSelectWrapper__disabled: {
        opacity: 0.3,
        userSelect: 'none'
    }
});
exports.default = BrowserSelect;
//# sourceMappingURL=browserSelect.js.map