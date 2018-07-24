"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const table_1 = require("../table");
const profile_1 = require("../profile");
const tokens_1 = require("../tokens");
const helpers_1 = require("../../helpers");
const removeIcon = require('./assets/close');
const monthlyIcon = require('./assets/monthly');
class DonationTable extends React.PureComponent {
    getTypeContent(row) {
        switch (row.type) {
            case 'recurring':
                return {
                    content: React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledType, null,
                            helpers_1.getLocale('recurring'),
                            " ",
                            React.createElement(style_1.StyledRecurringIcon, null, monthlyIcon)),
                        React.createElement(style_1.StyledRemove, { onClick: row.onRemove },
                            React.createElement(style_1.StyledRemoveIcon, null,
                                " ",
                                removeIcon,
                                " "),
                            helpers_1.getLocale('remove')))
                };
            case 'donation':
                return {
                    content: React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledType, null, helpers_1.getLocale('oneTime')),
                        React.createElement(style_1.StyledDate, null, row.text))
                };
            case 'tip':
                return {
                    content: React.createElement(React.Fragment, null,
                        React.createElement(style_1.StyledType, null, helpers_1.getLocale('tipOnLike')),
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
                content: helpers_1.getLocale('siteVisited'),
                theme
            },
            {
                content: helpers_1.getLocale('type'),
                theme
            },
            {
                content: helpers_1.getLocale('tokens'),
                theme: Object.assign({
                    'text-align': 'right',
                    'padding-right': '7px',
                    'text-transform': 'capitalize'
                }, theme)
            },
        ];
    }
    render() {
        const { id, children, rows, allItems, onClick } = this.props;
        const numItems = this.props.numItems || 0;
        return (React.createElement(style_1.StyledWrapper, { id: id },
            React.createElement(table_1.default, { children: children, rows: this.getRows(rows), header: this.headers }),
            !allItems
                ? React.createElement(style_1.StyledToggle, { onClick: onClick }, helpers_1.getLocale('seeAllItems', { numItems }))
                : null));
    }
}
exports.default = DonationTable;
//# sourceMappingURL=index.js.map