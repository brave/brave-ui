/// <reference types="react" />
import * as React from 'react';
import './style.css';
export declare const gridTemplate = 12;
export interface GridProps {
    id?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    columns?: string;
    padding?: string;
    gap?: string;
    width?: string;
    height?: string;
    textColor?: string;
    background?: string;
}
declare class Grid extends React.PureComponent<GridProps, {}> {
    readonly componentStyles: {
        '--gridTemplateColumns': string | number;
        '--gridPadding': string | undefined;
        '--gridGap': string | undefined;
        '--gridWidth': string | undefined;
        '--gridHeight': string | undefined;
        '--gridTextColor': string | undefined;
        '--gridBackground': string | undefined;
    };
    render(): JSX.Element;
}
export interface ColumnProps {
    id?: string;
    children?: React.ReactNode;
    size?: number;
    align?: string;
    verticalAlign?: string;
    background?: string;
    direction?: string;
}
declare class Column extends React.PureComponent<ColumnProps, {}> {
    readonly componentStyles: {
        '--columnSize': string;
        '--columnDisplay': string | boolean;
        '--columnAlign': string | undefined;
        '--columnVerticalAlign': string | undefined;
        '--columnBackground': string | undefined;
        '--columnDirection': string | undefined;
    };
    render(): JSX.Element;
}
export { Grid, Column };
