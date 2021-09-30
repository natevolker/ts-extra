import { AnyArray } from '../types';

/**
 * Returns the length of the Array `T`, provided it is not `number`
 *
 * @typedef {Object} ArrayItem
 * @category Utility
 * @example
 * ```
 * type A = DefinedLength<string[]> // === never
 * type B = DefinedLength<['hello', 'goodbye']> // === 2
 * ```
 */
export type DefinedLength<T extends Readonly<AnyArray>> =
  number extends T['length'] ? never : T['length'];
