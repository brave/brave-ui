import * as React from 'react';
export interface Props {
    id?: string;
    onClose: () => void;
    title: string;
    text: React.ReactNode;
    children: React.ReactNode;
}
export default class GrantWrapper extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
