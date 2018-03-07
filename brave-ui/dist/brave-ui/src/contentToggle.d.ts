/// <reference types="react" />
import * as React from 'react';
export interface ContentToggleProps {
    id?: string;
    summary: string;
    open?: boolean;
    defaultOpen?: boolean;
    withSeparator?: boolean;
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
export interface ContentToggleState {
    open?: boolean;
}
declare class ContentToggle extends React.PureComponent<ContentToggleProps, ContentToggleState> {
    constructor(props: ContentToggleProps);
    componentWillReceiveProps(nextProps: ContentToggleProps): void;
    handleClick(e: any): void;
    render(): JSX.Element;
}
export default ContentToggle;
