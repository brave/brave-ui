"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
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
        props.onChange({
            target: {
                checked: e.target.checked,
                id: e.target.id
            }
        });
    }
    render() {
        const { id, readOnly, disabled = false, autoFocus, leftText, rightText } = this.props;
        const { checked } = this.state;
        return (React.createElement(style_1.StyledSwitchButtonWrapper, { disabled: disabled },
            !!leftText &&
                React.createElement(style_1.StyledSwitchButtonLeftLabel, { id: `${id}LeftText`, htmlFor: id }, leftText),
            React.createElement("div", null,
                React.createElement(style_1.StyledCheckbox, { type: 'checkbox', id: id, readOnly: readOnly, disabled: disabled, checked: !!checked, onChange: this.handleChange, autoFocus: autoFocus }),
                React.createElement(style_1.StyledSwitchButton, { htmlFor: id, checked: !!checked, small: this.props.small },
                    React.createElement(style_1.StyledSwitchButtonKnob, { checked: !!checked, small: this.props.small }))),
            !!rightText &&
                React.createElement(style_1.StyledSwitchButtonRightLabel, { id: `${id}RightText`, htmlFor: id }, rightText)));
    }
}
exports.default = SwitchButton;
//# sourceMappingURL=index.js.map