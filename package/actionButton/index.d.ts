/// <reference types="react" />
import * as React from 'react';
export interface ActionButtonProps {
    id?: string;
    onClick?: () => void;
    text?: string | number;
    height?: string;
    fontSize?: string;
    color?: string;
    padding?: string;
}
declare class ActionButton extends React.PureComponent<ActionButtonProps, {}> {
    render(): JSX.Element;
}
export default ActionButton;
