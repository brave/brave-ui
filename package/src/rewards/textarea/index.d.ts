import * as React from 'react';
import * as CSS from 'csstype';
export interface Props {
    id?: string;
    title?: React.ReactNode;
    defaultValue?: string;
    disabled?: boolean;
    theme?: Theme;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, child: React.ReactNode) => void;
}
interface Theme {
    maxWidth?: CSS.MaxWidthProperty<1>;
    minHeight?: CSS.MinHeightProperty<1>;
}
export default class TextArea extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
export {};
