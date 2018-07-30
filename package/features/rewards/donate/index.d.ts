import * as React from 'react';
import * as CSS from 'csstype';
declare type Donation = {
    tokens: number;
    converted: number;
    selected?: boolean;
};
export interface Props {
    actionText: string;
    title: string;
    balance: number;
    donationAmounts: Donation[];
    onDonate: (amount: number) => void;
    onAmountSelection?: (tokens: number) => void;
    id?: string;
    theme?: Theme;
    donateType?: 'big' | 'small';
    children?: React.ReactNode;
}
interface State {
    missingFunds: boolean;
    amount: number;
}
export interface Theme {
    paddingSend?: CSS.PaddingProperty<1>;
    paddingFunds?: CSS.PaddingProperty<1>;
    paddingBox?: CSS.PaddingProperty<1>;
    sendBgColor?: CSS.Color;
    disabledSendColor?: CSS.Color;
}
export default class Donate extends React.PureComponent<Props, State> {
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    getCurrentAmount(amounts: Donation[]): number;
    validateDonation: () => void;
    validateAmount(balance: number, tokens?: number): boolean;
    onAmountChange: (tokens: number) => void;
    render(): JSX.Element;
}
export {};
