/// <reference types="react" />
import * as React from 'react';
export interface TitleHeadingProps {
    id?: string;
    text?: string;
    label?: string;
}
declare class TitleHeading extends React.PureComponent<TitleHeadingProps, {}> {
    render(): JSX.Element;
}
export interface SectionHeadingProps {
    id?: string;
    text?: string;
}
declare class SectionHeading extends React.PureComponent<SectionHeadingProps, {}> {
    render(): JSX.Element;
}
export interface FeatureHeadingProps {
    id?: string;
    text?: string;
}
declare class FeatureHeading extends React.PureComponent<FeatureHeadingProps, {}> {
    render(): JSX.Element;
}
export interface HeadingProps {
    id?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    color?: string;
    weight?: 'thin' | 'normal' | 'bold';
    text?: string;
}
declare class Heading extends React.PureComponent<HeadingProps, {}> {
    render(): JSX.Element;
}
export { TitleHeading, SectionHeading, FeatureHeading, Heading };
