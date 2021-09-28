export declare const isClient: boolean;
export declare const isDef: <T = any>(val?: T) => val is T;
export declare const assert: (condition: boolean, ...infos: any[]) => void;
export declare const isBoolean: (val: any) => val is boolean;
export declare const isFunction: <T extends Function>(val: any) => val is T;
export declare const isNumber: (val: any) => val is number;
export declare const isString: (val: unknown) => val is string;
export declare const isObject: (val: any) => val is object;
export declare const isWindow: (val: any) => val is Window;
export declare const now: () => number;
export declare const timestamp: () => number;
export declare const clamp: (n: number, min: number, max: number) => number;
export declare const noop: () => void;
export declare const rand: (min: number, max: number) => number;
