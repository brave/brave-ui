import * as React from 'react';
export interface PanelTheme {
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    maxWidth?: string;
    minWidth?: string;
    width?: string;
    height?: string;
    minHeight?: string;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
    fontFamily?: string;
    color?: string;
}
export interface PanelProps {
    id?: string;
    theme?: PanelTheme;
    children?: React.ReactNode;
}
declare class Panel extends React.PureComponent<PanelProps, {}> {
    render(): JSX.Element;
}
export default Panel;
