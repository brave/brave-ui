/// <reference types="react" />
import * as React from 'react';
export interface ActionButtonProps {
    href: string;
    noStyle?: boolean;
    target?: '_blank' | '_parent' | '_self' | '_top';
    text: string | number;
}
declare class Anchor extends React.PureComponent<ActionButtonProps, {}> {
    render(): JSX.Element;
}
export default Anchor;
