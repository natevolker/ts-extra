import { AnyArray } from '../types';
import { ArrayItem } from './array-item';

/**
 * Returns a Tuple where the first item represents the first item of `T`,
 * and the second item represents all the remaining items of `T`
 *
 * @category Utility
 * @example
 * ```
 * type A = Unshift<[1,2,3,4,5]> // === [1, [2, 3, 4, 5]]
 * ```
 */
export type Unshift<T extends Readonly<AnyArray>> =
  T extends readonly [infer TFirst, ...infer TRest]
    ? [TFirst, TRest]
    : [ArrayItem<T>, ArrayItem<T>[]];
