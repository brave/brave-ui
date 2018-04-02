/// <reference types="react" />
import * as React from 'react';
import './style.css';
import '../theme.css';
export interface BrowserButtonProps {
    id?: string;
    theme?: string;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    size?: string;
    fontSize?: string;
}
declare class BrowserButton extends React.PureComponent<BrowserButtonProps, {}> {
    readonly componentStyles: {
        '--size': string | undefined;
        '--fontSize': string | undefined;
    };
    render(): JSX.Element;
}
export default BrowserButton;
