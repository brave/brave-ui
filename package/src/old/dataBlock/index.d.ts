import * as React from 'react';
export interface DataProps {
    id?: string;
    asList?: boolean;
    children?: React.ReactNode;
}
declare class DataBlock extends React.PureComponent<DataProps, {}> {
    render(): JSX.Element;
}
export interface DataItemTheme {
    counterColor?: string;
    descriptionColor?: string;
    userSelect?: string;
}
export interface DataItemProps {
    id?: string;
    counter?: string | number;
    text?: string;
    description?: string;
    size?: 'medium' | 'small';
    onClick?: (e: any) => void;
    theme?: DataItemTheme;
}
declare class DataItem extends React.PureComponent<DataItemProps, {}> {
    render(): JSX.Element;
}
export { DataBlock, DataItem };
