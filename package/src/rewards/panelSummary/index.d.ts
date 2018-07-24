import * as React from 'react';
declare type Token = {
    color: string;
    tokens: number;
    converted: number;
};
declare type Grant = {
    id: string;
    tokens: number;
    converted: number;
};
export interface Props {
    grant: Token;
    ads: Token;
    contribute: Token;
    donation: Token;
    tips: Token;
    onActivity: () => void;
    id?: string;
    grants?: Grant[];
    onClaim?: (id: string) => void;
}
export default class PanelSummary extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
