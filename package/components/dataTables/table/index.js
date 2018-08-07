"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
class Table extends React.PureComponent {
    render() {
        const { id, header, rows, children } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            header && header.length > 0
                ? React.createElement(style_1.StyledTable, null,
                    header
                        ? React.createElement("thead", null,
                            React.createElement("tr", null, header.map((cell, i) => {
                                return React.createElement(style_1.StyledTH, { key: `${id}-th-${i}`, theme: cell.theme }, cell.content);
                            })))
                        : null,
                    rows
                        ? React.createElement("tbody", null, rows.map((row, i) => React.createElement(style_1.StyledTR, { key: i, theme: row.theme }, row.content.map((cell, j) => {
                            return React.createElement(style_1.StyledTD, { key: `${id}-td-${i}-${j}`, theme: cell.theme }, cell.content);
                        }))))
                        : null)
                : null,
            !rows || rows.length === 0
                ? React.createElement(style_1.StyledNoContent, null, children)
                : null));
    }
}
exports.default = Table;
//# sourceMappingURL=index.js.map