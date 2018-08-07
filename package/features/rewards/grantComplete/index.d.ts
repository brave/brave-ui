import * as React from 'react';
export interface Props {
    id?: string;
    onClose: () => void;
    amount: number;
    date: string;
}
export default class GrantComplete extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
