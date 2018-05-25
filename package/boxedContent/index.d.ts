/// <reference types="react" />
import * as React from 'react';
export interface BoxedContentTheme {
    maxWidth?: string;
    margin?: string;
    fontFamily?: string;
    color?: string;
}
export interface BoxedContentProps {
    id?: string;
    theme?: {
        [boxedContent: string]: BoxedContentTheme;
    };
    children?: React.ReactNode;
}
declare class BoxedContent extends React.PureComponent<BoxedContentProps, {}> {
    render(): JSX.Element;
}
export default BoxedContent;
