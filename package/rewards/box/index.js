"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const toggle_1 = require("../toggle");
const close = require('./assets/close');
const settings = require('./assets/settings');
class Box extends React.PureComponent {
    constructor(props) {
        super(props);
        this.settingsClick = () => {
            this.setState({ settingsOpened: !this.state.settingsOpened });
        };
        this.state = {
            settingsOpened: false
        };
    }
    render() {
        const { id, title, toggle, checked, onToggle, settingsChild, disabledContent, description, theme, children } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(style_1.StyledFlip, null,
                React.createElement(style_1.StyledContentWrapper, { open: !this.state.settingsOpened },
                    React.createElement(style_1.StyledLeft, null,
                        React.createElement(style_1.StyledTitle, { theme: theme, checked: checked }, title)),
                    React.createElement(style_1.StyledRight, null, toggle ?
                        React.createElement(toggle_1.default, { onClick: onToggle, checked: checked, size: 'large' })
                        : null),
                    React.createElement(style_1.StyledBreak, null),
                    React.createElement(style_1.StyledLeft, null,
                        React.createElement(style_1.StyledDescription, null, description)),
                    React.createElement(style_1.StyledRight, null, settingsChild && ((toggle && checked) || !toggle) ?
                        React.createElement(style_1.StyledSettingsIcon, { float: 'right', onClick: this.settingsClick }, settings)
                        : null),
                    React.createElement(style_1.StyledContent, null, (toggle && !checked) || (!toggle && disabledContent)
                        ? disabledContent
                        : children)),
                React.createElement(style_1.StyledSettingsWrapper, { open: this.state.settingsOpened },
                    React.createElement(style_1.StyledSettingsClose, { onClick: this.settingsClick, open: this.state.settingsOpened }, close),
                    React.createElement(style_1.StyledSettingsTitle, null,
                        React.createElement(style_1.StyledSettingsIcon, null, settings),
                        React.createElement(style_1.StyledSettingsText, null,
                            title,
                            " Settings")),
                    settingsChild))));
    }
}
exports.default = Box;
//# sourceMappingURL=index.js.map