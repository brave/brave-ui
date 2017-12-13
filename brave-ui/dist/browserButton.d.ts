/// <reference types="react" />
import * as React from 'react';
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
        '--bg': string;
        '--color': string;
        '--hoverColor': string;
        '--primary-bg': string;
        '--primary-gradient1': string;
        '--primary-gradient2': string;
        '--primary-color': string;
        '--primary-hoverColor': string;
        '--primary-borderHoverColor': string;
        '--secondary-bg': string;
        '--secondary-color': string;
        '--secondary-hoverColor': string;
        '--secondary-borderHoverColor': string;
        '--size': string | undefined;
        '--fontSize': string | undefined;
    };
    render(): JSX.Element;
}
export default BrowserButton;
