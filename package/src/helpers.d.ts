export declare const capitalize: (str: string) => string;
export declare const setValueBasedOnSize: (size?: "small" | "medium" | "large" | undefined, medium?: string | undefined, small?: string | undefined, large?: string | undefined) => string | undefined;
export declare const setTheme: (theme: any, prop: any) => any;
declare type Locals = {
    [key: string]: string;
};
declare type Replacements = {
    [key: string]: string | number;
};
export declare const initLocale: (locals: Locals) => void;
export declare const getLocale: (key: string, replacements?: Replacements | undefined) => string;
export {};
