import * as React from 'react';
export declare type Provider = 'twitter' | 'youtube' | 'twitch';
export interface Props {
    id?: string;
    src?: string;
    title: string;
    type?: 'big' | 'small';
    provider?: Provider;
    verified?: boolean;
}
export default class Profile extends React.PureComponent<Props, {}> {
    getProviderName(provider: Provider): string;
    getSrc(src?: string): string;
    render(): JSX.Element;
}
