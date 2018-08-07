import * as React from 'react';
declare type Grant = {
    tokens: number;
    expireDate: string;
};
export interface Props {
    tokens: number;
    converted: string | null;
    actions: {
        icon: string;
        name: string;
        action: () => void;
    }[];
    connectedWallet?: boolean;
    showCopy?: boolean;
    children?: React.ReactNode;
    showSecActions?: boolean;
    onSettingsClick?: () => void;
    onActivityClick?: () => void;
    grants?: Grant[];
    id?: string;
}
interface State {
    grantDetails: boolean;
}
export default class WalletWrapper extends React.PureComponent<Props, State> {
    constructor(props: Props);
    formatTokens(tokens: number): string;
    generateActions(actions: {
        icon: string;
        name: string;
        action: () => void;
    }[], id?: string): JSX.Element[];
    toggleGrantDetails: () => void;
    hasGrants: (grants?: Grant[] | undefined) => boolean | undefined;
    render(): JSX.Element;
}
export {};
