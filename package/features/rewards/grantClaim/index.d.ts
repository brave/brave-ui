import * as React from 'react';
export interface Props {
    id?: string;
    onClick: () => void;
}
export default class GrantClaim extends React.PureComponent<Props, {}> {
    render(): JSX.Element;
}
