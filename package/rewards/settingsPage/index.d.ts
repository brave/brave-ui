import * as React from 'react';
export interface Props {
    id?: string;
    activePageId?: string;
    children?: React.ReactNode;
}
export default class SettingsPage extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
