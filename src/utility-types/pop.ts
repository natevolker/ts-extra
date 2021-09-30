import { AnyArray } from '../types';
import { ArrayItem } from './array-item';

/**
 * Returns a Tuple where the first item represents the last item of `T`,
 * and the second item represents all the remaining items of `T`
 *
 * @category Utility
 * @example
 * ```
 * type A = Pop<[1,2,3,4,5]> // === [5, [1, 2, 3, 4]]
 * ```
 */
export type Pop<T extends Readonly<AnyArray>> =
  T extends readonly [...infer TRest, infer TLast]
    ? [TLast, TRest]
    : [ArrayItem<T>, ArrayItem<T>[]];
