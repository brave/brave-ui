import * as React from 'react';
export interface ContentToggleArrowProps {
    id?: string;
    summary: string;
    open?: boolean;
    defaultOpen?: boolean;
    withSeparator?: boolean;
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
export interface ContentToggleArrowState {
    open?: boolean;
}
declare class ContentToggleArrow extends React.PureComponent<ContentToggleArrowProps, ContentToggleArrowState> {
    constructor(props: ContentToggleArrowProps);
    componentWillReceiveProps(nextProps: ContentToggleArrowProps): void;
    handleClick(e: any): void;
    render(): JSX.Element;
}
export default ContentToggleArrow;
