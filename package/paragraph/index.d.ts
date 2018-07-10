import * as React from 'react';
export interface ParagraphTheme {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    margin?: string;
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
