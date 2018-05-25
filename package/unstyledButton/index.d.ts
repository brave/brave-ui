/// <reference types="react" />
import * as React from 'react';
export interface UnstyledButtonTheme {
    fontSize?: string;
    color?: string;
}
export interface UnstyledButtonProps {
    id?: string;
    onClick?: () => void;
    text?: string | number;
    theme?: {
        [unstyledButton: string]: UnstyledButtonTheme;
    };
}
declare class UnstyledButton extends React.PureComponent<UnstyledButtonProps, {}> {
    render(): JSX.Element;
}
export default UnstyledButton;
