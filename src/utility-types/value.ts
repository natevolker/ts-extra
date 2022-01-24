import { AnyArray, AnyObject } from "../types";
import { ArrayItem } from "./array-item";

/**
 * A Union of array items or object values
 *
 * @category Utility
 * @example
 * ```
 * type A = Value<{ foo: 'FOO', bar: 'BAR'}> // === 'FOO'|'BAR'
 * type B = Value<[1, 2, 3, 4, 5]> // === 1|2|3|4|5
 * ```
 */
export type Value<T extends Readonly<AnyObject> | Readonly<AnyArray>> =
  T extends Readonly<AnyArray> ? ArrayItem<T> : T[keyof T];
