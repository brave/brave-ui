"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./style.css");
class Separator extends React.PureComponent {
    get componentStyles() {
        const { noMargin } = this.props;
        return {
            '--separatorMargin': noMargin && 0
        };
    }
    render() {
        return (React.createElement("hr", { className: 'separator', style: this.componentStyles }));
    }
}
exports.default = Separator;
//# sourceMappingURL=index.js.map