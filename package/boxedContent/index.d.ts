/// <reference types="react" />
import * as React from 'react';
export interface BoxedContentProps {
    id?: string;
    width?: string;
    margin?: string;
    children?: React.ReactNode;
}
declare class BoxedContent extends React.PureComponent<BoxedContentProps, {}> {
    render(): JSX.Element;
}
export default BoxedContent;
