import * as React from 'react';
export interface ParagraphTheme {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    fontFamily?: string;
    margin?: string;
    textAlign?: string;
    lineHeight?: string;
}
export interface ParagraphProps {
    id?: string;
    text?: string;
    theme?: ParagraphTheme;
}
declare class Paragraph extends React.PureComponent<ParagraphProps, {}> {
    render(): JSX.Element;
}
export default Paragraph;
