/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrayItem } from './array-item';
import { DefinedLength } from './defined-length';

type Merge<
  A extends readonly any[],
  B extends readonly any[],
  C extends any[] = [],
> = A[number] extends never ? C : B[number] extends never ? C :
  A extends readonly [infer A0, ...infer ARest]
    ? B extends readonly [infer B0, ...infer BRest]
      ? ARest extends readonly any[] ? BRest extends readonly any[]
        ? Merge<ARest, BRest, [...C, [A0, B0]]>
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
> = DefinedLength<T> | DefinedLength<U> extends never
  ? [ArrayItem<T>, ArrayItem<U>][]
  : Merge<T, U>;
