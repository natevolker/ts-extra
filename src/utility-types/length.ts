import { AnyArray } from "../types";

/**
 * Returns the length of the Array `T`, provided it is not `number`
 *
 * @category Utility
 * @example
 * ```
 * type A = DefinedLength<string[]> // === never
 * type B = DefinedLength<['hello', 'goodbye']> // === 2
 * ```
 */
export type Length<T extends Readonly<AnyArray>> = number extends T["length"]
  ? never
  : T["length"];
