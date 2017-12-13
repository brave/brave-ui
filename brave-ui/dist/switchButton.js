"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const no_important_1 = require("aphrodite/no-important");
const theme_1 = require("./theme");
class SwitchButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { checked: props.checked };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({ checked: nextProps.checked });
        }
    }
    handleChange(e) {
        const { props } = this;
        if (props.disabled) {
            return;
        }
        if (!('checked' in props)) {
            this.setState({ checked: e.target.checked });
        }
        props.onChange({ target: { checked: e.target.checked } });
    }
    get componentStyles() {
        const { props } = this;
        return {
            '--width': 'small' in props && '40px',
            '--height': 'small' in props && '14px'
        };
    }
    render() {
        const { id, readOnly, disabled, autoFocus, leftText, rightText } = this.props;
        const { checked } = this.state;
        return (React.createElement("div", { className: no_important_1.css(styles.switchButton_wrapper, disabled && styles.switchButton_wrapper__disabled) },
            !!leftText &&
                React.createElement("label", { className: no_important_1.css(styles.switchButton_label__left), htmlFor: id }, leftText),
            React.createElement("div", null,
                React.createElement("input", { type: 'checkbox', id: id, readOnly: readOnly, disabled: disabled, className: no_important_1.css(styles.checkbox), checked: !!checked, onChange: this.handleChange, autoFocus: autoFocus }),
                React.createElement("label", { htmlFor: id, className: no_important_1.css(styles.switchButton, !!checked && styles.switchButton__checked), style: this.componentStyles },
                    React.createElement("i", { style: this.componentStyles, className: no_important_1.css(styles.switchButton_knob, !!checked && styles.switchButton_knob__checked) }))),
            !!rightText &&
                React.createElement("label", { className: no_important_1.css(styles.switchButton_label__right), htmlFor: id }, rightText)));
    }
}
const checkboxWidth = 'var(--width, 48px)';
const checkboxHeight = 'var(--height, 16px)';
const knobSize = `calc(${checkboxHeight} - 4px)`;
const styles = no_important_1.StyleSheet.create({
    checkbox: {
        display: 'none'
    },
    switchButton_wrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    switchButton_wrapper__disabled: {
        opacity: 0.3,
        userSelect: 'none'
    },
    switchButton: {
        boxSizing: 'border-box',
        padding: '0 2px',
        display: 'flex',
        alignItems: 'center',
        width: checkboxWidth,
        height: checkboxHeight,
        borderRadius: checkboxHeight,
        boxShadow: 'inset 0 1px 1px 1px #bbb',
        background: theme_1.default.switchButton.uncheckedBg,
        transition: 'all 0.4s',
        ':active': {
            boxShadow: `inset 0 0 0 ${checkboxHeight} #bbb`
        },
        ':active > i': {
            width: checkboxHeight
        }
    },
    switchButton__checked: {
        boxShadow: `inset 0 0 0 ${checkboxHeight} ${theme_1.default.switchButton.checkedBg}`,
        border: 'none',
        ':active > i': {
            marginLeft: `calc(90% - ${knobSize})`
        }
    },
    switchButton_knob: {
        boxSizing: 'border-box',
        height: knobSize,
        width: knobSize,
        borderRadius: checkboxHeight,
        background: theme_1.default.switchButton.knob,
        transition: 'all 0.3s',
        WebkitTransition: 'all 0.3s',
        boxShadow: '0 2px 2px rgba(0,0,0,0.25)',
        pointerEvents: 'none'
    },
    switchButton_knob__checked: {
        marginLeft: `calc(100% - ${knobSize})`,
        boxShadow: '0 2px 2px rgba(0,0,0,0.25)'
    },
    switchButton_label__left: {
        marginRight: '10px'
    },
    switchButton_label__right: {
        marginLeft: '10px'
    }
});
exports.default = SwitchButton;
//# sourceMappingURL=switchButton.js.map