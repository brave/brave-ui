/// <reference types="react" />
import * as React from 'react';
export interface UnstyledButtonTheme {
    fontSize?: string;
    color?: string;
    hoverColor?: string;
    userSelect?: string;
    textDecoration?: string;
}
export interface UnstyledButtonProps {
    id?: string;
    onClick?: (e: any) => void;
    text?: string | number;
    theme?: UnstyledButtonTheme;
}
declare class UnstyledButton extends React.PureComponent<UnstyledButtonProps, {}> {
    render(): JSX.Element;
}
export default UnstyledButton;
