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
    readonly componentStyles: {
        '--height': string | undefined;
        '--fontSize': string | undefined;
        '--color': string | undefined;
        '--padding': string | undefined;
    };
    render(): JSX.Element;
}
export default ActionButton;
