/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrayItem } from './array-item';

type Merge<
  A extends readonly any[],
  B extends readonly any[],
  C extends any[] = [],
> = A extends never[] ? C : B extends never[] ? C :
  A extends readonly [infer A0, ...infer ARest]
    ? B extends readonly [infer B0, ...infer BRest]
      ? ARest extends readonly any[] ? BRest extends readonly any[]
        ? Merge<ARest, BRest, [[A0, B0], ...C]>
        : never : never
      : [ArrayItem<A>, ArrayItem<B>][]
    : [ArrayItem<A>, ArrayItem<B>][];

/**
 * Merges array items from two arrays into a single array
 *
 * @category Utility
 * @example
 * ```
 * type A = Merge<['a', 'b', 'c'], [1, 2, 3]> // === [['a', 1], ['b', 2], ['c', 3]]
 * type B = Merge<string[], number[]> // === [string, number][]
 * ```
 */
export type MergeArrays<
  T extends readonly any[],
  U extends readonly any[],
> = Merge<T, U>;
