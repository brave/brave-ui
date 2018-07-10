"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const table_1 = require("../table");
const profile_1 = require("../profile");
const tokens_1 = require("../tokens");
const removeIcon = require('./assets/close');
const monthlyIcon = require('./assets/monthly');
class DonationTable extends React.PureComponent {
    getTypeContent(row) {
        switch (row.type) {
            case 'recurring':
                return {
                    content: React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledType, null,
                            "Recurring ",
                            React.createElement(style_1.StyledRecurringIcon, null, monthlyIcon)),
                        React.createElement(style_1.StyledRemove, { onClick: row.onRemove },
                            React.createElement(style_1.StyledRemoveIcon, null,
                                " ",
                                removeIcon,
                                " "),
                            "remove"))
                };
            case 'donation':
                return {
                    content: React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledType, null, "One time"),
                        React.createElement(style_1.StyledDate, null, row.text))
                };
            case 'tip':
                return {
                    content: React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledType, null, "Tip on like"),
                        React.createElement(style_1.StyledDate, null, row.text))
                };
        }
    }
    getRows(rows) {
        if (!rows) {
            return;
        }
        return rows.map((row) => {
            return {
                content: [
                    {
                        content: React.createElement(profile_1.default, { title: row.profile.name, provider: row.profile.provider, verified: row.profile.verified, type: 'small', src: row.profile.src })
                    },
                    this.getTypeContent(row),
                    {
                        content: React.createElement(tokens_1.default, { value: row.contribute.tokens, converted: row.contribute.converted, hideText: true, theme: {
                                display: 'block',
                                size: { token: '14px', text: '10px' },
                                color: { token: '#686978', text: '#9e9fab' }
                            } }),
                        theme: {
                            'text-align': 'right',
                            'padding-right': '7px'
                        }
                    }
                ]
            };
        });
    }
    get headers() {
        let theme = {};
        if (this.props.theme && this.props.theme.headerColor) {
            theme = {
                border: 'none',
                'border-bottom': `1px solid ${this.props.theme.headerColor}`,
                'padding-top': '0',
                'padding-bottom': '0',
                color: this.props.theme.headerColor
            };
        }
        return [
            {
                content: 'Site visited',
                theme
            },
            {
                content: 'Type',
                theme
            },
            {
                content: 'Tokens',
                theme: Object.assign({
                    'text-align': 'right',
                    'padding-right': '7px'
                }, theme)
            },
        ];
    }
    render() {
        const { id, children, rows, numItems, allItems, onClick } = this.props;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(table_1.default, { children: children, rows: this.getRows(rows), header: this.headers }),
            !allItems
                ? React.createElement(style_1.StyledToggle, { onClick: onClick },
                    "See all ",
                    numItems || 0,
                    " items")
                : null));
    }
}
exports.default = DonationTable;
//# sourceMappingURL=index.js.map