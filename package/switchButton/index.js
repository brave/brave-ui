"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
const helpers_1 = require("../helpers");
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
        const { id, readOnly, disabled = false, autoFocus, leftText, rightText } = this.props;
        const { checked } = this.state;
        return (React.createElement("div", { className: helpers_1.applyClass({
                switchButton_wrapper: true,
                switchButton_wrapper__disabled: disabled
            }) },
            !!leftText &&
                React.createElement("label", { id: `${id}LeftText`, className: 'switchButton_label__left', htmlFor: id }, leftText),
            React.createElement("div", null,
                React.createElement("input", { type: 'checkbox', id: id, readOnly: readOnly, disabled: disabled, className: 'checkbox', checked: !!checked, onChange: this.handleChange, autoFocus: autoFocus }),
                React.createElement("label", { htmlFor: id, className: helpers_1.applyClass({
                        switchButton: true,
                        switchButton__checked: !!checked
                    }), style: this.componentStyles },
                    React.createElement("i", { style: this.componentStyles, className: helpers_1.applyClass({
                            switchButton_knob: true,
                            switchButton_knob__checked: !!checked
                        }) }))),
            !!rightText &&
                React.createElement("label", { id: `${id}RightText`, className: 'switchButton_label__right', htmlFor: id }, rightText)));
    }
}
exports.default = SwitchButton;
//# sourceMappingURL=index.js.map