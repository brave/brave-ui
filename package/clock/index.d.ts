/// <reference types="react" />
import * as React from 'react';
export interface ClockProps {
    id?: string;
    color?: string;
}
export interface ClockState {
    currentTime: Array<{
        type: string;
        value: string;
    }>;
    date: Date;
}
declare class Clock extends React.PureComponent<ClockProps, ClockState> {
    constructor(props: ClockProps);
    readonly dateTimeFormat: any;
    readonly formattedTime: (string | JSX.Element | null)[];
    readonly formattedTimePeriod: any;
    getMinutes(date: any): number;
    maybeUpdateClock(): void;
    getClockState(now: Date): {
        date: Date;
        currentTime: any;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Clock;
