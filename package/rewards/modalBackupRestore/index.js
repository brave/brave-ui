"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const style_1 = require("./style");
const tabs_1 = require("../tabs");
const textarea_1 = require("../textarea");
const modal_1 = require("../modal");
const buttonPrimary_1 = require("../buttonPrimary");
const buttonSecondary_1 = require("../buttonSecondary");
class ModalBackupRestore extends React.PureComponent {
    render() {
        const { id, recoveryKey, activeTabId, onClose, onTabChange, onCopy, onPrint, onSaveFile, onRestore, onImport, error } = this.props;
        return (React.createElement(modal_1.default, { id: id, onClose: onClose, theme: { maxWidth: '666px' } },
            React.createElement(style_1.StyledWrapper, null,
                React.createElement(tabs_1.default, { activeTabId: activeTabId, onChange: onTabChange },
                    React.createElement("div", { id: `${id}-backup`, "data-key": 'backup', "data-title": 'Backup your Wallet' },
                        React.createElement(style_1.StyledContent, null, "Keep this anonymized recovery key for your Brave wallet in the safe place in case you lose access to this browser. Your funds are safe as long as you keep this recovery key either on a paper or in a device with preferably no internet connection."),
                        React.createElement(textarea_1.default, { title: 'Recovery Key', theme: { maxWidth: '100%', minHeight: '112px' }, defaultValue: recoveryKey, disabled: true }),
                        React.createElement(style_1.StyleButtonWrapper, null,
                            React.createElement(buttonSecondary_1.default, { text: 'Copy', size: 'small', color: 'subtle', onClick: onCopy.bind(recoveryKey) }),
                            React.createElement(buttonSecondary_1.default, { text: 'Print', size: 'small', color: 'subtle', onClick: onPrint.bind(recoveryKey) }),
                            React.createElement(buttonSecondary_1.default, { text: 'Save as File', size: 'small', color: 'subtle', onClick: onSaveFile.bind(recoveryKey) })),
                        React.createElement(style_1.StyledDoneWrapper, null,
                            React.createElement(buttonPrimary_1.default, { text: 'Done', size: 'medium', color: 'brand', onClick: onClose }))),
                    React.createElement("div", { id: `${id}-restore`, "data-key": 'restore', "data-title": 'Restore your Wallet' },
                        React.createElement(style_1.StyledContent, null, "Enter the recovery key to restore your Brave wallet. Make sure that the current wallet doesn\u2019t have any balance or is backed up safely. Restoring a wallet replaces the current wallet and you will loose any balance if you don\u2019t back up its recovery key."),
                        error
                            ? React.createElement("div", null,
                                "TODO: ",
                                error)
                            : null,
                        React.createElement(textarea_1.default, { title: React.createElement(React.Fragment, null,
                                "Enter your recovery key or ",
                                React.createElement(style_1.StyledImport, { onClick: onImport }, "import")), theme: { maxWidth: '100%', minHeight: '112px' }, defaultValue: '' }),
                        React.createElement(style_1.StyledActionsWrapper, null,
                            React.createElement(buttonSecondary_1.default, { text: 'Cancel', size: 'medium', color: 'brand', onClick: onClose }),
                            React.createElement(buttonPrimary_1.default, { text: 'Restore', size: 'medium', color: 'brand', onClick: onRestore.bind(recoveryKey) })))))));
    }
}
exports.default = ModalBackupRestore;
//# sourceMappingURL=index.js.map