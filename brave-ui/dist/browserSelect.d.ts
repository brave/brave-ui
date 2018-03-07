/// <reference types="react" />
import * as React from 'react';
export interface BrowserSelectProps {
    titleName?: string;
    id?: string;
    multiple?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: () => void;
    children: React.ReactNode;
}
declare class BrowserSelect extends React.PureComponent<BrowserSelectProps, {}> {
    render(): JSX.Element;
}
export default BrowserSelect;
