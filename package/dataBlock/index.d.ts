/// <reference types="react" />
import * as React from 'react';
export interface DataProps {
    id?: string;
    size?: 'medium' | 'small';
    list?: boolean;
    children?: React.ReactNode;
}
declare class DataBlock extends React.PureComponent<DataProps, {}> {
    render(): JSX.Element;
}
export interface DataItemProps {
    id?: string;
    color?: string;
    counter?: string;
    text?: string;
    description?: string;
    size?: 'medium' | 'small';
    onClick?: (e: any) => void;
    noSelect?: boolean;
}
declare class DataItem extends React.PureComponent<DataItemProps, {}> {
    render(): JSX.Element;
}
export { DataBlock, DataItem };
