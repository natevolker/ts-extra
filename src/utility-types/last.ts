import { AnyArray } from '../types';
import { Pop } from './pop';

/**
 * Returns the last item of the Array `T`
 *
 * @typedef {Object} Last
 * @category Utility
 * @example
 * ```
 * type A = First<string[]> // === string
 * type B = First<['hello', 'goodbye']> // === 'goodbye'
 * ```
 */
export type Last<T extends Readonly<AnyArray>> = Pop<T>[0];
