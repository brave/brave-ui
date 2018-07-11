/// <reference types="react" />
import * as React from 'react';
export interface PushButtonTheme {
    minWidth?: string;
    minHeight?: string;
    fontSize?: string;
    textTransform?: string;
}
export interface PushButtonProps {
    id?: string;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: (e: any) => void;
    theme?: PushButtonTheme;
    children?: React.ReactNode;
}
declare class PushButton extends React.PureComponent<PushButtonProps, {}> {
    render(): JSX.Element;
}
export default PushButton;
