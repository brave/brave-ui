import * as React from 'react';
export interface PushButtonTheme {
    minWidth?: string;
    minHeight?: string;
    fontSize?: string;
}
export interface PushButtonProps {
    id?: string;
    color?: string;
    disabled?: boolean;
    onClick?: (e: any) => void;
    theme?: PushButtonTheme;
    children?: React.ReactNode;
}
declare class PushButton extends React.PureComponent<PushButtonProps, {}> {
    render(): JSX.Element;
}
export default PushButton;
