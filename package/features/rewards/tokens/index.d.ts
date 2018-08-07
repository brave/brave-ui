import * as React from 'react';
import * as CSS from 'csstype';
interface Theme {
    color?: {
        token?: CSS.Color;
        tokenNum?: CSS.Color;
        text?: CSS.Color;
    };
    size?: {
        token?: CSS.FontSizeProperty<1>;
        tokenNum?: CSS.FontSizeProperty<1>;
        text?: CSS.FontSizeProperty<1>;
    };
    display?: CSS.DisplayProperty;
}
export interface Props {
    value: number;
    id?: string;
    converted?: number;
    currency?: string;
    hideText?: boolean;
    toFixed?: boolean;
    isNegative?: boolean;
    theme?: Theme;
}
export default class Tokens extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
