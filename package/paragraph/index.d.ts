/// <reference types="react" />
import * as React from 'react';
export interface ParagraphTheme {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
}
export interface ParagraphProps {
    id?: string;
    text?: string;
    theme?: {
        [paragraph: string]: ParagraphTheme;
    };
}
declare class Paragraph extends React.PureComponent<ParagraphProps, {}> {
    render(): JSX.Element;
}
export default Paragraph;
