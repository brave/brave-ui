/// <reference types="react" />
import * as React from 'react';
export interface PageProps {
    id?: string;
    title?: string;
    label?: string;
    style?: object;
    children?: React.ReactNode;
}
declare class Page extends React.PureComponent<PageProps, {}> {
    render(): JSX.Element;
}
export default Page;
