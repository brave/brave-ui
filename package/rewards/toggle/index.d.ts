import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    id?: string;
    disabled?: boolean;
    checked?: boolean;
    size?: 'large' | 'medium' | 'small';
    onToggle?: () => void;
    theme?: Theme;
}
interface Theme {
    onColor?: CSS.Color;
    offColor?: CSS.Color;
}
export default class Toggle extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
