/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import { AnyArray, AnyFunction } from '../types';
import { Intersection } from './intersection';
import { DefinedLength } from './defined-length';

/**
 * @hidden
 * @ignore
 * @internal
 */
type LastOfUnion<T> = Intersection<(
  T extends never ? never : (arg: T) => T
)> extends infer U
  ? U extends AnyFunction
    ? ReturnType<U>
    : never
  : never;

/**
 * @hidden
 * @ignore
 * @internal
 */
type UnionToTuple<
  TUnion,
  TTuple extends AnyArray = [],
> = LastOfUnion<TUnion> extends infer TLast
  ? Exclude<TUnion, TLast> extends never
    ? [TLast, ...TTuple]
    : UnionToTuple<Exclude<TUnion, TLast>, [TLast, ...TTuple]>
  : never;

/**
 * Returns a Tuple for a given Union `T`
 *
 * @category Utility
 * @example
 * ```
 * type A = Tuple<1|2|3> // === [1,2,3]
 * ```
 */
export type Tuple<T> = Exclude<T, LastOfUnion<T>> extends never
  ? T extends Readonly<AnyArray>
    ? DefinedLength<T> extends never
      ? UnionToTuple<T>
      : T
    : UnionToTuple<T>
  : UnionToTuple<T>;

type BuildPowersOf2LengthArrays<N extends number, R extends never[][]> =
  R[0][N] extends never ? R : BuildPowersOf2LengthArrays<N, [[...R[0], ...R[0]], ...R]>;

type ConcatLargestUntilDone<N extends number, R extends never[][], B extends never[]> =
  B['length'] extends N ? B : [...R[0], ...B][N] extends never
    ? ConcatLargestUntilDone<N, R extends [R[0], ...infer U] ? U extends never[][] ? U : never : never, B>
    : ConcatLargestUntilDone<N, R extends [R[0], ...infer U] ? U extends never[][] ? U : never : never, [...R[0], ...B]>;

type Replace<R extends any[], T> = { [K in keyof R]: T };

export type TupleOf<T, N extends number> = number extends N ? T[] : {
  [K in N]:
  BuildPowersOf2LengthArrays<K, [[never]]> extends infer U ? U extends never[][]
    ? Replace<ConcatLargestUntilDone<K, U, []>, T> : never : never;
}[N];
