/// <reference types="react" />
import * as React from 'react';
export interface BrowserTextProps {
    id?: string;
    onClick?: () => void;
    text?: string | number;
    noSelect?: boolean;
    fontSize?: string;
    color?: string;
    padding?: string;
    bold?: boolean;
}
declare class BrowserText extends React.PureComponent<BrowserTextProps, {}> {
    render(): JSX.Element;
}
export default BrowserText;
