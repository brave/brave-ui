/// <reference types="react" />
import * as React from 'react';
export interface GridProps {
    id?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    columns?: number;
    padding?: string;
    gap?: string;
    width?: string;
    height?: string;
    textColor?: string;
    background?: string;
}
declare class Grid extends React.PureComponent<GridProps, {}> {
    render(): JSX.Element;
}
export interface ColumnProps {
    id?: string;
    children?: React.ReactNode;
    size?: number | string;
    align?: string;
    verticalAlign?: string;
    background?: string;
    direction?: string;
}
declare class Column extends React.PureComponent<ColumnProps, {}> {
    render(): JSX.Element;
}
export { Grid, Column };
