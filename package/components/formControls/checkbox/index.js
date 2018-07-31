"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../features/rewards/controlWrapper/index");
const check = require('./assets/check');
class Checkbox extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.generateChecks = (children) => {
            const self = this;
            return React.Children.map(children, (child, i) => {
                if (child.props['data-key'] === undefined) {
                    return null;
                }
                const element = child.props.children;
                const key = child.props['data-key'];
                const selected = self.props.value[key] || false;
                return (React.createElement(style_1.StyledLabel, { key: `${self.props.id}-checkbox-${i}`, onClick: self.onOptionClick.bind(self, key, child, selected) },
                    React.createElement(style_1.StyledBox, { selected: selected, theme: self.props.theme }, selected ? check : null),
                    React.createElement(style_1.StyledText, null, element)));
            });
        };
        this.onOptionClick = (key, child, selected) => {
            const multiple = this.props.multiple;
            const checked = this.props.value;
            let newState = {};
            selected = !selected;
            Object.keys(this.props.value).map((item) => {
                newState[item] = multiple ? checked[item] : false;
                if (key === item) {
                    newState[item] = selected;
                }
            });
            if (this.props.onChange) {
                this.props.onChange(key, selected, child, newState);
            }
        };
    }
    render() {
        const { id, children, title, theme } = this.props;
        const num = React.Children.count(children);
        let data = null;
        if (num > 0) {
            data = this.generateChecks(children);
        }
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(index_1.default, { title: title, theme: theme }, data)));
    }
}
exports.default = Checkbox;
//# sourceMappingURL=index.js.map