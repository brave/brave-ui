"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../components/dataTables/table/index");
const helpers_1 = require("../../../helpers");
const tokens_1 = require("../tokens");
class TableTransactions extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.colors = {
            deposit: '#9f22a1',
            tipOnLike: '#696fdc',
            donation: '#696fdc',
            contribute: '#9752cb',
            recurringDonation: '#696fdc'
        };
        this.getHeader = () => {
            const header = [
                helpers_1.getLocale('date'),
                helpers_1.getLocale('type'),
                helpers_1.getLocale('description'),
                helpers_1.getLocale('amount')
            ];
            return header.map((item, i) => {
                return {
                    content: i === header.length - 1
                        ? React.createElement(style_1.StyledTHLast, null, item)
                        : item
                };
            });
        };
        this.getDescription = (desc) => {
            if (typeof desc === 'string') {
                return desc;
            }
            return (React.createElement(React.Fragment, null,
                React.createElement("span", null, desc.publisher),
                " ",
                React.createElement(style_1.StyledProvider, null,
                    helpers_1.getLocale('on'),
                    " ",
                    desc.platform)));
        };
        this.getRows = (rows) => {
            if (!rows) {
                return;
            }
            return rows.map((row) => {
                const cell = {
                    content: [
                        {
                            content: row.date
                        },
                        {
                            content: React.createElement(style_1.StyledType, { color: this.colors[row.type] }, helpers_1.getLocale(row.type))
                        },
                        {
                            content: this.getDescription(row.description)
                        },
                        {
                            content: (React.createElement(tokens_1.default, { value: row.amount.value, isNegative: row.amount.isNegative, converted: row.amount.converted, theme: {
                                    color: {
                                        tokenNum: this.colors[row.type] || '#686978',
                                        token: '#686978',
                                        text: '#9E9FAB'
                                    },
                                    size: {
                                        text: '10px',
                                        token: '12px',
                                        tokenNum: '14px'
                                    }
                                } })),
                            theme: {
                                'text-align': 'right',
                                'padding-right': '14px'
                            }
                        }
                    ]
                };
                return cell;
            });
        };
    }
    render() {
        const { id, children, rows } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(index_1.default, { header: this.getHeader(), children: children, rows: this.getRows(rows) })));
    }
}
exports.default = TableTransactions;
//# sourceMappingURL=index.js.map