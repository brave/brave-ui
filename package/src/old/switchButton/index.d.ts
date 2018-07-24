import * as React from 'react';
export interface SwitchButtonTheme {
    labelColor?: string;
    userSelect?: string;
}
export interface SwitchButtonProps {
    checked: boolean;
    disabled?: boolean;
    onChange?: (e: any) => void;
    id: string;
    readOnly?: boolean;
    autoFocus?: boolean;
    leftText?: string;
    rightText?: string;
    size?: 'large' | 'medium' | 'small';
    theme?: SwitchButtonTheme;
}
export interface SwitchButtonState {
    checked?: boolean;
}
declare class SwitchButton extends React.PureComponent<SwitchButtonProps, SwitchButtonState> {
    constructor(props: SwitchButtonProps);
    componentWillReceiveProps(nextProps: SwitchButtonProps): void;
    handleChange(e: any): void;
    getLabel(side: 'left' | 'right'): JSX.Element;
    render(): JSX.Element;
}
export default SwitchButton;
