import * as React from 'react';
import * as CSS from 'csstype';
interface Theme {
    color?: CSS.Color;
    boldColor?: CSS.Color;
}
export interface Props {
    children: React.ReactNode;
    id?: string;
    image?: string;
    theme?: Theme;
}
export default class DisabledContent extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
