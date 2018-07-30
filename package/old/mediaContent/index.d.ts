import * as React from 'react';
export interface MediaTheme {
    width?: string;
    margin?: string;
}
export interface MediaContentProps {
    id?: string;
    media?: string;
    children?: React.ReactNode;
    theme?: MediaTheme;
}
declare class MediaContent extends React.PureComponent<MediaContentProps, {}> {
    render(): JSX.Element;
}
export default MediaContent;
