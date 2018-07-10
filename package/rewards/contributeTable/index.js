"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const table_1 = require("../table");
const profile_1 = require("../profile");
const removeIcon = require('./assets/close');
class ContributeTable extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.getHeader = (header) => {
            if (!header) {
                return;
            }
            let theme = {};
            if (this.props.theme && this.props.theme.headerColor) {
                theme = {
                    border: 'none',
                    'border-bottom': `1px solid ${this.props.theme.headerColor}`,
                    padding: '0',
                    color: this.props.theme.headerColor
                };
            }
            return header.map((item, i) => {
                return {
                    content: i === 0
                        ? React.createElement(style_1.StyledTHSite, null, item)
                        : (i - 1) === header.length
                            ? React.createElement(style_1.StyledTHOther, null, item)
                            : React.createElement(style_1.StyledTHLast, null, item),
                    theme: theme
                };
            });
        };
        this.getRows = (rows) => {
            if (!rows) {
                return;
            }
            return rows.map((row) => {
                const cell = {
                    content: [
                        {
                            content: React.createElement(profile_1.default, { title: row.profile.name, provider: row.profile.provider, verified: row.profile.verified, type: 'small', src: row.profile.src })
                        },
                        {
                            content: React.createElement(style_1.StyledText, null,
                                row.attention,
                                "% ",
                                React.createElement(style_1.StyledRemove, { onClick: row.onRemove }, removeIcon))
                        }
                    ]
                };
                if (this.props.showRowAmount) {
                    const remaining = 100 - row.attention;
                    cell.theme = {
                        background: `linear-gradient(90deg, #FFF ${remaining}%, #d2c6f3 ${row.attention}%)`
                    };
                }
                return cell;
            });
        };
    }
    render() {
        const { id, header, children, rows, numSites, allSites, onShowAll } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(table_1.default, { header: this.getHeader(header), children: children, rows: this.getRows(rows) }),
            !allSites
                ? React.createElement(style_1.StyledToggle, { onClick: onShowAll },
                    "See all ",
                    numSites || 0,
                    " sites")
                : null));
    }
}
exports.default = ContributeTable;
//# sourceMappingURL=index.js.map