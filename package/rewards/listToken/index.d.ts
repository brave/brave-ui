import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    title: string;
    value: number;
    converted: number;
    id?: string;
    theme?: Theme;
    isNegative?: boolean;
}
interface Theme {
    color?: CSS.Color;
    borderTop?: CSS.BorderTopProperty<1>;
    borderBottom?: CSS.BorderTopProperty<1>;
}
export default class ListToken extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
