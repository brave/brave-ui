import * as React from 'react';
import * as CSS from 'csstype';
import { Cell, Row } from '../table';
import { Provider } from '../profile';
interface ProfileCell {
    verified: boolean;
    name: string;
    src: string;
    provider?: Provider;
}
declare type DonationType = 'donation' | 'tip' | 'recurring';
export interface DetailRow {
    profile: ProfileCell;
    contribute: {
        tokens: number;
        converted: number;
    };
    type: DonationType;
    text?: string | React.ReactNode;
    onRemove?: () => void;
}
export interface Props {
    id?: string;
    children?: React.ReactNode;
    rows?: DetailRow[];
    numItems?: number;
    allItems?: boolean;
    onClick?: () => void;
    theme?: Theme;
}
interface Theme {
    headerColor?: CSS.Color;
}
export default class DonationTable extends React.PureComponent<Props, {}> {
    getTypeContent(row: DetailRow): Cell;
    getRows(rows?: DetailRow[]): Row[] | undefined;
    readonly headers: Cell[];
    render(): JSX.Element;
}
export {};
