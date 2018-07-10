import * as React from 'react';
import 'emptykit.css';
export interface PageTheme {
    fontFamily?: string;
    color?: string;
    padding?: string;
    background?: string;
}
export interface PageProps {
    id?: string;
    title?: string;
    label?: string;
    theme?: PageTheme;
    children?: React.ReactNode;
}
declare class Page extends React.PureComponent<PageProps, {}> {
    render(): JSX.Element;
}
export default Page;
