import * as React from 'react';
export interface Props {
    id?: string;
    onAccept: () => void;
    onLater: () => void;
}
export default class GrantInit extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
