import * as React from 'react';
import * as CSS from 'csstype';
interface Theme {
    position?: CSS.PositionProperty;
    top?: CSS.TopProperty<1>;
    left?: CSS.LeftProperty<1>;
}
export interface Props {
    type: 'error' | 'success';
    id?: string;
    children?: React.ReactNode;
    onClose?: () => void;
    theme?: Theme;
}
export default class Alert extends React.PureComponent<Props, {}> {
    readonly icon: JSX.Element | null;
    render(): JSX.Element;
}
export {};
