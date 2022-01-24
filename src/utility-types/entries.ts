import { AnyObject, Index } from "../types";
import { Value } from "./value";
import { Tuple } from "./tuple";

/**
 * A Tuple of [key, value] pairs constructed from `T`
 *
 * @category Utility
 * @example
 * ```
 * type A = Entries<{foo: 'FOO', bar: 'BAR'}> // === [['foo', 'FOO'],['bar', 'BAR']]
 * type B = Entries<{ [index: string | number]: any }> // === [string | number, any][]
 * ```
 */
export type Entries<T extends Readonly<AnyObject>> = Extract<
  Index,
  keyof T
> extends never
  ? Tuple<
      Value<{
        [PKey in keyof T]: [PKey, T[PKey]];
      }>
    >
  : [keyof T, Value<T>][];
