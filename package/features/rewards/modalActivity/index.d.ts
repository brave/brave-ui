import * as React from 'react';
import { DetailRow as ContributeRow } from '../tableContribute';
import { DetailRow as TransactionRow } from '../tableTransactions';
export interface Token {
    value: number;
    converted: number;
    isNegative?: boolean;
}
export declare type SummaryType = 'deposit' | 'grant' | 'ads' | 'contribute' | 'recurring' | 'donations';
export interface SummaryItem {
    type: SummaryType;
    token: Token;
    text: string;
    notPaid?: boolean;
}
export interface Props {
    contributeRows: ContributeRow[];
    onClose: () => void;
    onPrint: () => void;
    onDownloadPDF: () => void;
    onMonthChange: (value: string, child: React.ReactNode) => void;
    months: Record<string, string>;
    currentMonth: string;
    transactionRows: TransactionRow[];
    openBalance?: Token;
    closingBalance?: Token;
    id?: string;
    summary: SummaryItem[];
    total: Token;
    paymentDay: number;
}
export default class ModalActivity extends React.PureComponent<Props, {}> {
    private colors;
    private hasWarnings;
    readonly headers: string[];
    readonly selectTitle: JSX.Element;
    getSummaryBox: () => React.ReactNode[] | null;
    render(): JSX.Element;
}
