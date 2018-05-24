/// <reference types="react" />
import * as React from 'react';
export interface GridTheme {
    padding?: string;
    gridGap?: string;
    maxWidth?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
}
export interface GridProps {
    id?: string;
    disabled?: boolean;
    columns?: number;
    children?: React.ReactNode;
    theme?: {
        [grid: string]: GridTheme;
    };
}
declare class Grid extends React.PureComponent<GridProps, {}> {
    render(): JSX.Element;
}
export interface ColumnTheme {
    justifyContent?: string;
    verticalAlign?: string;
    backgroundColor?: string;
    flexDirection?: string;
}
export interface ColumnProps {
    id?: string;
    size?: number | string;
    theme?: {
        [column: string]: ColumnTheme;
    };
    children?: React.ReactNode;
}
declare class Column extends React.PureComponent<ColumnProps, {}> {
    render(): JSX.Element;
}
export { Grid, Column };
