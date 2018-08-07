import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    title: React.ReactNode;
    value: number;
    converted: number;
    id?: string;
    theme?: Theme;
    isNegative?: boolean;
}
interface Theme {
    color?: CSS.Color;
    fontWeight?: CSS.FontWeightProperty;
    borderTop?: CSS.BorderTopProperty<1>;
    borderBottom?: CSS.BorderTopProperty<1>;
    marginBottom?: CSS.MarginBottomProperty<1>;
}
export default class ListToken extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
