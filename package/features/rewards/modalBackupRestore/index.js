"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const index_1 = require("../../../components/layout/tabs/index");
const index_2 = require("../../../components/formControls/textarea/index");
const index_3 = require("../../../components/popupModals/modal/index");
const index_4 = require("../../../components/buttonsIndicators/buttonPrimary/index");
const index_5 = require("../../../components/buttonsIndicators/buttonSecondary/index");
const helpers_1 = require("../../../helpers");
class ModalBackupRestore extends React.PureComponent {
    render() {
        const { id, recoveryKey, activeTabId, onClose, onTabChange, onCopy, onPrint, onSaveFile, onRestore, onImport, error } = this.props;
        return (React.createElement(index_3.default, { id: id, onClose: onClose, theme: { maxWidth: '666px' } },
            React.createElement(style_1.StyledWrapper, null,
                React.createElement(index_1.default, { activeTabId: activeTabId, onChange: onTabChange },
                    React.createElement("div", { id: `${id}-backup`, "data-key": 'backup', "data-title": helpers_1.getLocale('rewardsBackupText1') },
                        React.createElement(style_1.StyledContent, null, helpers_1.getLocale('rewardsBackupText2')),
                        React.createElement(index_2.default, { title: helpers_1.getLocale('recoveryKeys'), theme: { maxWidth: '100%', minHeight: '112px' }, defaultValue: recoveryKey, disabled: true }),
                        React.createElement(style_1.StyleButtonWrapper, null,
                            React.createElement(index_5.default, { text: helpers_1.getLocale('copy'), size: 'small', color: 'subtle', onClick: onCopy.bind(this, recoveryKey) }),
                            React.createElement(index_5.default, { text: helpers_1.getLocale('print'), size: 'small', color: 'subtle', onClick: onPrint.bind(this, recoveryKey) }),
                            React.createElement(index_5.default, { text: helpers_1.getLocale('saveAsFile'), size: 'small', color: 'subtle', onClick: onSaveFile.bind(this, recoveryKey) })),
                        React.createElement(style_1.StyledDoneWrapper, null,
                            React.createElement(index_4.default, { text: helpers_1.getLocale('done'), size: 'medium', color: 'brand', onClick: onClose }))),
                    React.createElement("div", { id: `${id}-restore`, "data-key": 'restore', "data-title": helpers_1.getLocale('rewardsRestoreText1') },
                        React.createElement(style_1.StyledContent, null, helpers_1.getLocale('rewardsRestoreText2')),
                        error
                            ? React.createElement("div", null,
                                "TODO: ",
                                error)
                            : null,
                        React.createElement(index_2.default, { title: React.createElement(React.Fragment, null,
                                helpers_1.getLocale('rewardsRestoreText3'),
                                React.createElement(style_1.StyledImport, { onClick: onImport }, helpers_1.getLocale('import'))), theme: { maxWidth: '100%', minHeight: '112px' }, defaultValue: '' }),
                        React.createElement(style_1.StyledActionsWrapper, null,
                            React.createElement(index_5.default, { text: helpers_1.getLocale('cancel'), size: 'medium', color: 'brand', onClick: onClose }),
                            React.createElement(index_4.default, { text: helpers_1.getLocale('restore'), size: 'medium', color: 'brand', onClick: onRestore.bind(this, recoveryKey) })))))));
    }
}
exports.default = ModalBackupRestore;
//# sourceMappingURL=index.js.map