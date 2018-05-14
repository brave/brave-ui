/// <reference types="react" />
import * as React from 'react';
export interface ParagraphProps {
    id?: string;
    size?: string;
    color?: string;
    weight?: string;
    italic?: boolean;
    text?: string;
}
declare class Paragraph extends React.PureComponent<ParagraphProps, {}> {
    render(): JSX.Element;
}
export default Paragraph;
