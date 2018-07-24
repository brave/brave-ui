import * as React from 'react';
export interface SelectOptionTheme {
    userSelect?: string;
}
export interface SelectOptionProps {
    titleName?: string;
    id?: string;
    multiple?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (e: any) => void;
    children: React.ReactNode;
    theme?: SelectOptionTheme;
}
declare class SelectOption extends React.PureComponent<SelectOptionProps, {}> {
    render(): JSX.Element;
}
export default SelectOption;
