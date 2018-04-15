/// <reference types="react" />
import * as React from 'react';
export interface BrowserButtonProps {
    id?: string;
    color?: string;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    size?: string;
    fontSize?: string;
}
declare class BrowserButton extends React.PureComponent<BrowserButtonProps, {}> {
    render(): JSX.Element;
}
export default BrowserButton;
