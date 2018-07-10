import * as React from 'react';
export interface Props {
    activeTabId: string;
    onChange: (tabId: any) => void;
    children?: React.ReactNode;
    id?: string;
}
export default class Tabs extends React.PureComponent<Props, {}> {
    generateTabs: () => {
        tabs: null;
        content: null;
    } | {
        tabs: React.ReactNode[];
        content: null;
    };
    render(): JSX.Element;
}
