import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    id?: string;
    outsideClose?: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
    theme?: Theme;
}
interface Theme {
    maxWidth?: CSS.MaxWidthProperty<1>;
}
export default class Modal extends React.PureComponent<Props, {}> {
    outsideClose: (e: React.ChangeEvent<HTMLDivElement>) => void;
    render(): JSX.Element;
}
export {};
