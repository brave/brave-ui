import * as React from 'react';
declare type Donation = {
    tokens: number;
    converted: number;
    selected?: boolean;
};
export interface Props {
    allow: boolean;
    provider: string;
    balance: number;
    donationAmounts: Donation[];
    onAllow: (allow: boolean) => void;
    onDonate: (amount: number, allow: boolean) => void;
    onAmountSelection?: (tokens: number) => void;
    onClose: () => void;
    id?: string;
    title?: string;
}
export default class Tip extends React.PureComponent<Props, {}> {
    onDonate: (amount: number) => void;
    onToggle: () => void;
    onAmountChange: (tokens: number) => void;
    render(): JSX.Element;
}
export {};
