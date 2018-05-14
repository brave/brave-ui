/// <reference types="react" />
import * as React from 'react';
export interface SelectOptionProps {
    titleName?: string;
    id?: string;
    multiple?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (e: any) => void;
    children: React.ReactNode;
}
declare class SelectOption extends React.PureComponent<SelectOptionProps, {}> {
    render(): JSX.Element;
}
export default SelectOption;
