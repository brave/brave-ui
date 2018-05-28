"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const helpers_1 = require("../helpers");
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
    getLabel(side) {
        return (React.createElement(style_1.StyledSwitchButtonLabel, { id: `${this.props.id + helpers_1.capitalize(side)}Text`, htmlFor: this.props.id, size: this.props.size, theme: this.props.theme }, side === 'left' ? this.props.leftText : this.props.rightText));
    }
    render() {
        const { id, readOnly, disabled, autoFocus, size = 'medium', rightText, leftText } = this.props;
        const { checked } = this.state;
        return (React.createElement(style_1.StyledSwitchButtonWrapper, { disabled: disabled },
            leftText && this.getLabel('left'),
            React.createElement(style_1.StyledSwitchButton, { type: 'checkbox', id: id, checked: !!checked, readOnly: readOnly, disabled: disabled, autoFocus: autoFocus, size: size, onChange: this.handleChange }),
            rightText && this.getLabel('right')));
    }
}
exports.default = SwitchButton;
//# sourceMappingURL=index.js.map