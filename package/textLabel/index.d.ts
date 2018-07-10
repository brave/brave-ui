import * as React from 'react';
export interface TextLabelTheme {
    fontSize?: string;
    color?: string;
    padding?: string;
    fontWeight?: string;
    lineHeight?: string;
    cursor?: string;
}
export interface TextLabelProps {
    id?: string;
    onClick?: (e: any) => void;
    theme?: TextLabelTheme;
    text?: string | number;
}
declare class TextLabel extends React.PureComponent<TextLabelProps, {}> {
    render(): JSX.Element;
}
export default TextLabel;
