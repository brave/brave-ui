import * as React from 'react';
export interface GridTheme {
    padding?: string;
    gridGap?: string;
    maxWidth?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    margin?: string;
    alignItems?: string;
}
export interface GridProps {
    id?: string;
    disabled?: boolean;
    columns?: number;
    onClick?: (e: any) => void;
    children?: React.ReactNode;
    theme?: GridTheme;
}
declare class Grid extends React.PureComponent<GridProps, {}> {
    render(): JSX.Element;
}
export interface ColumnTheme {
    justifyContent?: string;
    alignItems?: string;
    backgroundColor?: string;
    flexDirection?: string;
    flexWrap?: string;
    overflow?: string;
}
export interface ColumnProps {
    id?: string;
    size?: number | string;
    theme?: ColumnTheme;
    onClick?: (e: any) => void;
    children?: React.ReactNode;
}
declare class Column extends React.PureComponent<ColumnProps, {}> {
    render(): JSX.Element;
}
export { Grid, Column };
