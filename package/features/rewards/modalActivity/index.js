"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../components/popupModals/modal/index");
const tableContribute_1 = require("../tableContribute");
const tableTransactions_1 = require("../tableTransactions");
const select_1 = require("../../../components/formControls/select");
const listToken_1 = require("../listToken");
const helpers_1 = require("../../../helpers");
const alertIcon = require('./assets/alert');
const printIcon = require('./assets/print');
const downloadIcon = require('./assets/download');
const verifiedIcon = require('./assets/verified');
class ModalActivity extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.colors = {
            deposit: '#9f22a1',
            grant: '#696fdc',
            ads: '#696fdc',
            contribute: '#9752cb',
            recurring: '#696fdc',
            donations: '#'
        };
        this.hasWarnings = false;
        this.getSummaryBox = () => {
            this.hasWarnings = false;
            let items;
            if (!this.props.summary) {
                return null;
            }
            items = this.props.summary.map((item, i) => {
                let title = item.text;
                if (item.notPaid) {
                    this.hasWarnings = true;
                    title = (React.createElement(React.Fragment, null,
                        title,
                        " ",
                        alertIcon));
                }
                return (React.createElement(listToken_1.default, { key: `${this.props.id}-summary-${i}`, title: title, value: item.token.value, converted: item.token.converted, theme: {
                        color: item.notPaid ? '#838391' : this.colors[item.type],
                        marginBottom: '0',
                        borderTop: i === 0 ? '1px solid #d0d6dc' : 'none'
                    } }));
            });
            items.push(React.createElement(listToken_1.default, { key: `${this.props.id}-summary-99`, title: React.createElement("b", null, helpers_1.getLocale('total')), value: this.props.total.value, converted: this.props.total.converted, theme: { color: '#9f22a1', borderBottom: 'none', marginBottom: '0' } }));
            return items;
        };
    }
    get headers() {
        return [
            helpers_1.getLocale('rewardsContributeVisited'),
            helpers_1.getLocale('rewardsContributeAttention'),
            helpers_1.getLocale('tokenAllocation')
        ];
    }
    get selectTitle() {
        return (React.createElement(style_1.StyledTitle, null,
            helpers_1.getLocale('braveRewards'),
            " ",
            React.createElement(style_1.StyledSubTitle, null, helpers_1.getLocale('walletActivity'))));
    }
    render() {
        const { id, onClose, contributeRows, onMonthChange, currentMonth, openBalance, closingBalance, months, transactionRows, paymentDay } = this.props;
        return (React.createElement(index_1.default, { id: id, onClose: onClose },
            React.createElement(style_1.StyledWrapper, null,
                React.createElement(style_1.StyledHeader, null,
                    React.createElement(style_1.StyledLeft, null,
                        months
                            ? React.createElement(select_1.default, { value: currentMonth, onChange: onMonthChange, title: this.selectTitle, theme: {
                                    padding: '7px 0',
                                    maxWidth: '100%'
                                } }, Object.keys(months).map((item) => {
                                return React.createElement("div", { "data-value": item, key: `${id}-monthly-${item}` },
                                    React.createElement(style_1.StyledSelectOption, null, months[item]));
                            }))
                            : null,
                        openBalance && closingBalance
                            ? React.createElement(style_1.StyledBalance, null,
                                React.createElement(listToken_1.default, { title: helpers_1.getLocale('openBalance'), value: openBalance.value, converted: openBalance.converted, theme: {
                                        color: '#9f22a1',
                                        borderBottom: 'none',
                                        borderTop: 'none'
                                    } }),
                                React.createElement(style_1.StyledClosing, null,
                                    React.createElement(listToken_1.default, { title: React.createElement("b", null, helpers_1.getLocale('closeBalance')), value: closingBalance.value, converted: closingBalance.converted, theme: {
                                            color: '#9f22a1',
                                            borderBottom: 'none',
                                            borderTop: 'none'
                                        } })))
                            : null),
                    React.createElement(style_1.StyledRight, null,
                        React.createElement(style_1.StyledIconWrap, null,
                            React.createElement(style_1.StyledIcon, null,
                                printIcon,
                                " ",
                                React.createElement(style_1.StyledIconText, null, helpers_1.getLocale('print'))),
                            React.createElement(style_1.StyledIcon, null,
                                downloadIcon,
                                " ",
                                React.createElement(style_1.StyledIconText, null, helpers_1.getLocale('downloadPDF')))),
                        this.getSummaryBox())),
                this.hasWarnings
                    ? React.createElement(style_1.StyledWarning, null,
                        alertIcon,
                        React.createElement(style_1.StyledWarningText, null,
                            React.createElement("b", null, helpers_1.getLocale('paymentNotMade')),
                            " ",
                            helpers_1.getLocale('paymentWarning')))
                    : null,
                React.createElement(style_1.StyledTables, null,
                    React.createElement(style_1.StyledTableTitle, null, helpers_1.getLocale('transactions')),
                    React.createElement(tableTransactions_1.default, { rows: transactionRows }),
                    React.createElement(style_1.StyledTableTitle, null,
                        React.createElement("span", null, helpers_1.getLocale('contributeAllocation')),
                        React.createElement(style_1.StyledTableSubTitle, null, helpers_1.getLocale('paymentMonthly', { day: paymentDay }))),
                    React.createElement(tableContribute_1.default, { header: this.headers, rows: contributeRows, allSites: true, showRowAmount: true }),
                    React.createElement(style_1.StyledVerified, null,
                        verifiedIcon,
                        " ",
                        React.createElement(style_1.StyledVerifiedText, null, helpers_1.getLocale('braveVerified')))),
                React.createElement(style_1.StyledNote, null,
                    React.createElement("b", null, helpers_1.getLocale('pleaseNote')),
                    " ",
                    helpers_1.getLocale('activityNote'),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    helpers_1.getLocale('activityCopy')))));
    }
}
exports.default = ModalActivity;
//# sourceMappingURL=index.js.map