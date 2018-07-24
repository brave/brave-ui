import * as React from 'react';
import * as CSS from 'csstype';
export interface Theme {
    titleColor: CSS.Color;
}
export interface Props {
    title: string;
    id?: string;
    theme?: Theme;
    description?: string;
    toggle?: boolean;
    checked?: boolean;
    onToggle?: () => void;
    settingsChild?: React.ReactNode;
    disabledContent?: React.ReactNode;
    children?: React.ReactNode;
}
interface State {
    settingsOpened: boolean;
}
export default class Box extends React.PureComponent<Props, State> {
    constructor(props: Props);
    settingsClick: () => void;
    render(): JSX.Element;
}
export {};
