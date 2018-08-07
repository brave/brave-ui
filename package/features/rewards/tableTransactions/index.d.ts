import * as React from 'react';
import { Row } from '../../../components/dataTables/table/index';
export declare type TransactionType = 'deposit' | 'tipOnLike' | 'donation' | 'contribute' | 'recurringDonation';
declare type Description = string | {
    publisher: string;
    platform: string;
};
export interface DetailRow {
    date: string;
    type: TransactionType;
    description: Description;
    amount: {
        value: number;
        converted: number;
        isNegative?: boolean;
    };
}
export interface Props {
    id?: string;
    children?: React.ReactNode;
    rows?: DetailRow[];
}
export default class TableTransactions extends React.PureComponent<Props, {}> {
    private colors;
    getHeader: () => {
        content: string | JSX.Element;
    }[];
    getDescription: (desc: Description) => string | JSX.Element;
    getRows: (rows?: DetailRow[] | undefined) => Row[] | undefined;
    render(): JSX.Element;
}
export {};
