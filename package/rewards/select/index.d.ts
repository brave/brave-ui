import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    children: React.ReactNode;
    id?: string;
    disabled?: boolean;
    value?: string;
    title?: React.ReactNode;
    onChange?: (child: React.ReactNode) => void;
    theme?: Theme;
}
interface State {
    value: string | number;
    selected: React.ReactNode;
    show: boolean;
}
export interface Theme {
    maxWidth?: CSS.MaxWidthProperty<1>;
    border?: CSS.BorderProperty<1>;
    padding?: CSS.PaddingProperty<1>;
    arrowPadding?: CSS.RightProperty<1>;
}
export default class Select extends React.PureComponent<Props, State> {
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    getDefaultValue(props: Props): {
        value: any;
        selected: any;
    };
    generateOptions: (value: string | undefined, children: React.ReactNode) => (JSX.Element | null)[];
    onOptionClick: (value: string, child: React.ReactNode, element: React.ReactNode) => void;
    onSelectClick: () => void;
    onBlur: () => void;
    render(): JSX.Element;
}
export {};
