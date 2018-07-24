import * as React from 'react';
export interface PushButtonTheme {
    minWidth?: string;
    minHeight?: string;
    fontSize?: string;
    textTransform?: string;
    fontWeight?: string;
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
export interface PushButtonLinkProps {
    id?: string;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    theme?: PushButtonTheme;
    children?: React.ReactNode;
}
declare class PushButtonLink extends React.PureComponent<PushButtonLinkProps, {}> {
    render(): JSX.Element;
}
export { PushButton, PushButtonLink };
