import * as React from 'react';
export interface Props {
    id?: string;
    title?: string;
    children?: React.ReactNode;
    theme?: {
        [key: string]: string;
    };
}
export default class List extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
