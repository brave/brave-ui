import * as React from 'react';
export interface AnchorTheme {
    textDecoration?: string;
    color?: string;
    fontSize?: string;
    userSelect?: string;
}
export interface AnchorProps {
    id?: string;
    href: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    text?: string | number;
    theme?: AnchorTheme;
}
declare class Anchor extends React.PureComponent<AnchorProps, {}> {
    render(): JSX.Element;
}
export default Anchor;
