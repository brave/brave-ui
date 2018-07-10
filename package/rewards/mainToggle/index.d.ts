import * as React from 'react';
export interface Props {
    enabled: boolean;
    onToggle: () => void;
    id?: string;
}
export default class MainToggle extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
