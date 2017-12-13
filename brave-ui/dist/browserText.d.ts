/// <reference types="react" />
import * as React from 'react';
export interface BrowserTextProps {
    id?: string;
    onClick?: () => {};
    text: string | number;
    noSelect?: boolean;
    fontSize?: string;
    color?: string;
    padding?: string;
    bold?: boolean;
}
declare class BrowserText extends React.PureComponent<BrowserTextProps, {}> {
    readonly componentStyles: {
        '--fontSize': string | undefined;
        '--color': string | undefined;
        '--padding': string | undefined;
        '--noSelect': string | boolean | undefined;
        '--cursor': string | boolean | undefined;
        '--bold': string | boolean | undefined;
    };
    render(): JSX.Element;
}
export default BrowserText;
