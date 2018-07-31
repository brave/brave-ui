import * as React from 'react';
export interface Props {
    text: string;
    color: Color;
    onClick: () => void;
    id?: string;
    disabled?: boolean;
    icon?: {
        image: React.ReactNode;
        position: 'left' | 'right';
    };
}
export declare type Color = 'brand' | 'action';
export default class ButtonCta extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
