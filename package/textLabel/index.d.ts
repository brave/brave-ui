/// <reference types="react" />
import * as React from 'react';
export interface TextLabelTheme {
    fontSize?: string;
    color?: string;
    padding?: string;
    fontWeight?: string;
    lineHeight?: string;
}
export interface TextLabelProps {
    id?: string;
    onClick?: (e: any) => void;
    theme?: TextLabelTheme;
    title?: string;
    text?: string | number;
}
declare class TextLabel extends React.PureComponent<TextLabelProps, {}> {
    render(): JSX.Element;
}
export default TextLabel;
