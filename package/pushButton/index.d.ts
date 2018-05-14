/// <reference types="react" />
import * as React from 'react';
export interface PushButtonProps {
    id?: string;
    color?: string;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    size?: string;
    fontSize?: string;
}
declare class PushButton extends React.PureComponent<PushButtonProps, {}> {
    render(): JSX.Element;
}
export default PushButton;
