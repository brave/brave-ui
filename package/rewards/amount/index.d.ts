import * as React from 'react';
export interface Props {
    amount: number;
    converted: number;
    onClick: (amount: number) => void;
    id?: string;
    selected?: boolean;
    type?: 'big' | 'small';
    currency?: string;
}
export default class Amount extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
