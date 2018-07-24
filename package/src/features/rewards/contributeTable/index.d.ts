import * as React from 'react';
import * as CSS from 'csstype';
import { Row } from '../../../components/dataTables/table/index';
import { Provider } from '../profile/index';
interface ProfileCell {
    verified: boolean;
    name: string;
    src: string;
    provider?: Provider;
}
export interface DetailRow {
    profile: ProfileCell;
    attention: number;
    onRemove?: () => void;
}
export interface Props {
    header: string[];
    showRowAmount?: boolean;
    id?: string;
    children?: React.ReactNode;
    theme?: Theme;
    rows?: DetailRow[];
    numSites?: number;
    allSites?: boolean;
    onShowAll?: () => void;
}
interface Theme {
    headerColor?: CSS.Color;
}
export default class ContributeTable extends React.PureComponent<Props, {}> {
    getHeader: (header: string[]) => {
        content: JSX.Element;
        theme: {};
    }[] | undefined;
    getRows: (rows?: DetailRow[] | undefined) => Row[] | undefined;
    render(): JSX.Element;
}
export {};
