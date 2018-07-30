import * as React from 'react';
import * as CSS from 'csstype';
declare type Social = {
    type: SocialType;
    name: string;
    handler: string;
};
declare type SocialType = 'twitter' | 'youtube' | 'twitch';
declare type Donation = {
    tokens: number;
    converted: number;
    selected?: boolean;
};
export interface Props {
    balance: number;
    donationAmounts: Donation[];
    onAmountSelection: (tokens: number) => void;
    id?: string;
    title?: string;
    domain: string;
    bgImage?: string;
    logo?: string;
    social?: Social[];
    currentDonation?: number;
    children?: React.ReactNode;
    onDonate: (amount: number, monthly: boolean) => void;
    onClose?: () => void;
    theme?: Theme;
}
export interface Theme {
    logoBgColor: CSS.Color;
}
interface State {
    monthly: boolean;
}
export default class SiteBanner extends React.PureComponent<Props, State> {
    constructor(props: Props);
    getLogo(logo: string | undefined, domain: string): JSX.Element;
    getSocialLink(item: Social): string;
    getSocial: (social?: Social[] | undefined) => JSX.Element[] | null;
    getTitle(title?: string): string;
    getText(children?: React.ReactNode): {};
    onMonthlyChange: (key: string, selected: boolean) => void;
    onDonate: (amount: number) => void;
    render(): JSX.Element;
}
export {};
