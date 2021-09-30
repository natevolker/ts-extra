import { AnyArray } from '../types';
import { Unshift } from './unshift';

/**
 * Returns the first item of the Array `T`
 *
 * @typedef {Object} First
 * @category Utility
 * @example
 * ```
 * type A = First<string[]> // === string
 * type B = First<['hello', 'goodbye']> // === 'hello'
 * ```
 */
export type First<T extends Readonly<AnyArray>> = Unshift<T>[0];
