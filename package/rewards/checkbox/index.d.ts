import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    value: {
        [key: string]: boolean;
    };
    children: React.ReactNode;
    id?: string;
    multiple?: boolean;
    title?: React.ReactNode;
    theme?: Theme;
    onChange?: (key: string, selected: boolean, child: React.ReactNode, all: {
        [key: string]: boolean;
    }) => void;
}
export interface Theme {
    checkColor?: CSS.Color;
    borderColor?: CSS.Color;
    maxWidth?: CSS.MaxWidthProperty<1>;
}
export default class Checkbox extends React.PureComponent<Props, {}> {
    generateChecks: (children: React.ReactNode) => (JSX.Element | null)[];
    onOptionClick: (key: string, child: React.ReactNode, selected: boolean) => void;
    render(): JSX.Element;
}
