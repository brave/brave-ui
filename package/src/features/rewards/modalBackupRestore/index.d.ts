import * as React from 'react';
export declare type TabsType = 'backup' | 'restore';
export interface Props {
    recoveryKey: string;
    activeTabId: TabsType;
    onTabChange: (tab: TabsType) => void;
    onClose: () => void;
    onCopy: (key: string) => void;
    onPrint: (key: string) => void;
    onSaveFile: (key: string) => void;
    onRestore: (key: string) => void;
    onImport: () => void;
    error?: React.ReactNode;
    id?: string;
}
export default class ModalBackupRestore extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
