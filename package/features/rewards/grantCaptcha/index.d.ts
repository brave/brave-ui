import * as React from 'react';
export interface Props {
    id?: string;
    isWindows?: boolean;
    onSolution: (x: number, y: number) => void;
    dropBgImage: React.ReactNode;
}
export default class GrantCaptcha extends React.PureComponent<Props, {}> {
    private readonly offset;
    private dndStartPosition;
    private captchaBox;
    constructor(props: Props);
    onCaptchaDrop: (event: MouseEvent) => void;
    onCaptchaDrag: (event: any) => void;
    preventDefault(event: MouseEvent): void;
    refSet: (node: HTMLDivElement) => void;
    render(): JSX.Element;
}
