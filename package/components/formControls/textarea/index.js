"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../features/rewards/controlWrapper/index");
class TextArea extends React.PureComponent {
    render() {
        const { id, onChange, defaultValue, title, theme, disabled } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id, theme: theme },
            React.createElement(index_1.default, { title: title, theme: theme },
                React.createElement(style_1.StyledArea, { onChange: onChange, disabled: disabled, defaultValue: defaultValue, theme: theme }))));
    }
}
exports.default = TextArea;
//# sourceMappingURL=index.js.map