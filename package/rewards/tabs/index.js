"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Tabs extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.generateTabs = () => {
            let content = null;
            const self = this;
            if (React.Children.count(self.props.children) === 0) {
                return {
                    tabs: null,
                    content: null
                };
            }
            const tabs = React.Children.map(self.props.children, (child, i) => {
                if (child.props['data-key'] == undefined) {
                    return null;
                }
                const key = child.props['data-key'];
                const title = child.props['data-title'] || `Tab - ${i}`;
                const selected = self.props.activeTabId && (self.props.activeTabId == key ||
                    (self.props.activeTabId.length === 0 &&
                        i === 0));
                if (selected) {
                    content = child.props.children;
                }
                return React.createElement(style_1.StyledTab, { key: `${self.props.id}-tab-${key}`, onClick: self.props.onChange.bind(self, key), selected: selected }, title);
            });
            return {
                tabs,
                content
            };
        };
    }
    render() {
        const { content, tabs } = this.generateTabs();
        return (React.createElement(style_1.StyledWrapper, { id: this.props.id },
            React.createElement(style_1.StyledTabWrapper, null, tabs),
            React.createElement(style_1.StyledContent, null, content)));
    }
}
exports.default = Tabs;
//# sourceMappingURL=index.js.map