/// <reference types="react" />
import * as React from 'react';
export interface UnstyledButtonProps {
    id?: string;
    onClick?: () => void;
    text?: string | number;
    height?: string;
    fontSize?: string;
    color?: string;
    padding?: string;
}
declare class UnstyledButton extends React.PureComponent<UnstyledButtonProps, {}> {
    render(): JSX.Element;
}
export default UnstyledButton;
