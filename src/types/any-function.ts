/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Function with arguments `TArgs` and return type `TReturn`
 *
 * @typedef {Object} AnyFunction
 * @category Everyday
 */
export type AnyFunction<
  TArgs extends readonly any[] = any[],
  TReturn = any,
> = (...args: TArgs) => TReturn;
