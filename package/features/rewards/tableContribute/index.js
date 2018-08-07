"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../components/dataTables/table/index");
const index_2 = require("../profile/index");
const helpers_1 = require("../../../helpers");
const tokens_1 = require("../tokens");
const removeIcon = require('./assets/close');
class TableContribute extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.getHeader = (header) => {
            if (!header) {
                return;
            }
            if (this.props.showRemove) {
                header.push('');
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
                        : i === header.length - 1
                            ? React.createElement(style_1.StyledTHLast, null, item)
                            : React.createElement(style_1.StyledTHOther, null, item),
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
                            content: (React.createElement(index_2.default, { title: row.profile.name, provider: row.profile.provider, verified: row.profile.verified, type: 'small', src: row.profile.src }))
                        },
                        {
                            content: (React.createElement(style_1.StyledText, null,
                                row.attention,
                                "%"))
                        }
                    ]
                };
                if (row.token) {
                    cell.content.push({
                        content: (React.createElement(tokens_1.default, { value: row.token.value, converted: row.token.converted, theme: {
                                color: {
                                    tokenNum: '#686978',
                                    token: '#a7acb2',
                                    text: '#a7acb2'
                                },
                                size: {
                                    text: '10px',
                                    token: '12px',
                                    tokenNum: '14px'
                                }
                            } })),
                        theme: {
                            textAlign: 'right',
                            paddingRight: '10px'
                        }
                    });
                }
                if (this.props.showRemove) {
                    cell.content.push({
                        content: (React.createElement(style_1.StyledRemove, { onClick: row.onRemove }, removeIcon)),
                        theme: {
                            textAlign: 'right'
                        }
                    });
                }
                if (this.props.showRowAmount) {
                    if (this.props.showRemove) {
                        const remaining = (100 - row.attention) / 1.04;
                        const attention = row.attention / 1.04;
                        const diff = remaining + attention;
                        cell.theme = {
                            background: `linear-gradient(
              to right,
              transparent 0%,
              transparent ${remaining}%,
              rgba(210, 198, 243, 0.39) ${remaining}%,
              rgba(210, 198, 243, 0.39) ${diff}%,
              transparent ${diff}%,
              transparent 100%
            )`
                        };
                    }
                    else {
                        const remaining = 100 - row.attention;
                        cell.theme = {
                            background: `linear-gradient(90deg, transparent ${remaining}%, rgba(210, 198, 243, 0.39) ${row.attention}%)`
                        };
                    }
                }
                return cell;
            });
        };
    }
    render() {
        const { id, header, children, rows, allSites, onShowAll } = this.props;
        const numSites = this.props.numSites || 0;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(index_1.default, { header: this.getHeader(header), children: children, rows: this.getRows(rows) }),
            !allSites && numSites > 0
                ? React.createElement(style_1.StyledToggle, { onClick: onShowAll }, helpers_1.getLocale('seeAllSites', { numSites }))
                : null));
    }
}
exports.default = TableContribute;
//# sourceMappingURL=index.js.map