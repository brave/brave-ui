import * as React from 'react';
declare type Token = {
    color: string;
    tokens: number;
    converted: number;
};
export interface Props {
    onActivity: () => void;
    grant?: Token;
    ads?: Token;
    contribute: Token;
    donation?: Token;
    tips?: Token;
    id?: string;
}
export default class WalletSummary extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
