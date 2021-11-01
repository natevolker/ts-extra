/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrayItem } from './array-item';

type ReverseHelper<
  T extends readonly any[],
  U extends any[] = [],
> = T[number] extends never
  ? U
  : T extends readonly [...infer TRest, infer TLast]
    ? TRest extends readonly any[]
      ? ReverseHelper<TRest, [...U, TLast]>
      : never
    : ArrayItem<T>[];

/**
 * Reverse the order of Array type T
 *
 * @category Utility
 * @example
 * ```
 * type A = Reverse<[1,2,3,4,5]> // === [5, 4, 3, 2, 1]
 * type B = Reverse<number[]> // === number[]
 * ```
 */
export type Reverse<T extends readonly any[]> = ReverseHelper<T>;
