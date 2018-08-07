import * as React from 'react';
import { DetailRow } from '../tableContribute/index';
export interface Props {
    rows: DetailRow[];
    onClose: () => void;
    id?: string;
}
export default class ModalContribute extends React.PureComponent<Props, {}> {
    readonly headers: string[];
    render(): JSX.Element;
}
