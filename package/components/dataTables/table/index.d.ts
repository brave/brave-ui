import * as React from 'react';
export interface Cell {
    theme?: {
        [key: string]: string;
    };
    content: React.ReactNode;
}
export interface Row {
    theme?: {
        [key: string]: string;
    };
    content: Cell[];
}
export interface Props {
    id?: string;
    header?: Cell[];
    children?: React.ReactNode;
    rows?: Row[];
    rowTheme?: {
        [key: string]: string;
    };
}
export default class Table extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
