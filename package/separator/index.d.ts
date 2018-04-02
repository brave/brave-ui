/// <reference types="react" />
import * as React from 'react';
import './style.css';
export interface SeparatorProps {
    noMargin?: boolean;
}
declare class Separator extends React.PureComponent<SeparatorProps, {}> {
    readonly componentStyles: {
        '--separatorMargin': number | boolean | undefined;
    };
    render(): JSX.Element;
}
export default Separator;
