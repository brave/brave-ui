import * as React from 'react';
import * as CSS from 'csstype';
export interface Theme {
    color?: {
        background?: CSS.ColorProperty;
        arrow?: CSS.Color;
        text?: CSS.Color;
        border?: CSS.Color;
    };
    border?: CSS.BorderProperty<1>;
    padding?: CSS.PaddingProperty<1>;
    offSet?: number;
    width?: CSS.WidthProperty<1>;
    boxShadow?: CSS.BoxShadowProperty;
    align?: CSS.TextAlignProperty;
}
export interface Props {
    content: React.ReactNode;
    id?: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    theme?: Theme;
    children?: React.ReactNode;
}
interface State {
    open: boolean;
}
export default class Tooltip extends React.PureComponent<Props, State> {
    constructor(props: Props);
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    readonly position: "right" | "bottom" | "left" | "top";
    render(): JSX.Element;
}
export {};
