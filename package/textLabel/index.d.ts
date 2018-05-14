/// <reference types="react" />
import * as React from 'react';
export interface TextLabelProps {
    id?: string;
    onClick?: () => void;
    text?: string | number;
    noSelect?: boolean;
    size?: string;
    color?: string;
    padding?: string;
    weight?: 'bold' | 'normal' | 'thin';
}
declare class TextLabel extends React.PureComponent<TextLabelProps, {}> {
    render(): JSX.Element;
}
export default TextLabel;
