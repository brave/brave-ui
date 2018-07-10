"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const controlWrapper_1 = require("../controlWrapper");
class Select extends React.PureComponent {
    constructor(props) {
        super(props);
        this.generateOptions = (value, children) => {
            const self = this;
            return React.Children.map(children, (child, i) => {
                if (child.props['data-value'] == undefined) {
                    return null;
                }
                const element = child.props.children;
                const value = child.props['data-value'];
                const selected = value == self.state.value;
                return React.createElement(style_1.StyledOption, { key: `${self.props.id}-option-${i}`, onClick: self.onOptionClick.bind(self, value, child, element), selected: selected }, element);
            });
        };
        this.onOptionClick = (value, child, element) => {
            this.setState({
                value: value,
                selected: element,
                show: false
            });
            if (this.props.onChange) {
                this.props.onChange(child);
            }
        };
        this.onSelectClick = () => {
            this.setState({
                show: !this.state.show
            });
        };
        this.onBlur = () => {
            this.setState({
                show: false
            });
        };
        const obj = this.getDefaultValue(props);
        this.state = {
            value: obj.value,
            selected: obj.selected,
            show: false
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            const obj = this.getDefaultValue(this.props);
            this.setState({
                value: obj.value,
                selected: obj.selected,
                show: false
            });
        }
    }
    getDefaultValue(props) {
        const children = React.Children.toArray(props.children);
        let child;
        if (props.value != undefined) {
            child = children.find((child) => child.props['data-value'] == props.value);
        }
        if (child == undefined) {
            child = children.find((child) => child && child.props['data-value'] != undefined);
        }
        return {
            value: child.props['data-value'],
            selected: child.props.children
        };
    }
    render() {
        const { id, children, disabled, value, title, theme } = this.props;
        const num = React.Children.count(children);
        let data = null;
        if (num > 0) {
            data = this.generateOptions(value, children);
        }
        return (React.createElement(style_1.StyledWrapper, { id: id, theme: theme },
            React.createElement(controlWrapper_1.default, { title: title, theme: theme }, num > 0
                ? React.createElement(style_1.StyledSelectWrapper, { tabIndex: '0', onBlur: this.onBlur },
                    React.createElement(style_1.StyledSelect, { onClick: this.onSelectClick, disabled: disabled, show: this.state.show, theme: theme }, this.state.selected),
                    React.createElement(style_1.StyledOptions, { show: this.state.show }, data))
                : null)));
    }
}
exports.default = Select;
//# sourceMappingURL=index.js.map