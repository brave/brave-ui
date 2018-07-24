import * as React from 'react';
export interface ImageTheme {
    maxWidth?: string;
    minWidth?: string;
    width?: string;
    height?: string;
    minHeight?: string;
    margin?: string;
    padding?: string;
}
export interface ImageProps {
    theme?: ImageTheme;
    id?: string;
    children?: HTMLSourceElement;
    src?: string;
    caption?: string;
}
declare class Image extends React.PureComponent<ImageProps, {}> {
    render(): JSX.Element;
}
export default Image;
