/// <reference types="react" />
import * as React from 'react';
export interface MediaContentProps {
    id?: string;
    media?: string;
    mediaSize?: string;
    gap?: string;
    children?: React.ReactNode;
}
declare class MediaContent extends React.PureComponent<MediaContentProps, {}> {
    render(): JSX.Element;
}
export default MediaContent;
