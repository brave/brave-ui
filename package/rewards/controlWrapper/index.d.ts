import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    id?: string;
    title?: React.ReactNode;
    children?: React.ReactNode;
    theme?: Theme;
}
interface Theme {
    maxWidth?: CSS.MaxWidthProperty<1>;
}
export default class ControlWrapper extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
