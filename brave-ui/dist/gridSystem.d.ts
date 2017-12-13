/// <reference types="react" />
import * as React from 'react';
export declare const gridTemplate = 12;
export interface GridProps {
    id?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    padding?: string;
    gap?: string;
    width?: string;
    height?: string;
    textColor?: string;
    background?: string;
}
declare class Grid extends React.PureComponent<GridProps, {}> {
    readonly componentStyles: {
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
    size?: number;
    children?: React.ReactNode;
    align?: string;
    verticalAlign?: string;
    background?: string;
}
declare class Column extends React.PureComponent<ColumnProps, {}> {
    readonly componentStyles: {
        '--columnDisplay': string | boolean;
        '--columnAlign': string | undefined;
        '--columnVerticalAlign': string | undefined;
        '--columnBackground': string | undefined;
    };
    render(): JSX.Element;
}
export { Grid, Column };
