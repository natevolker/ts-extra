import { AnyArray, AnyFunction } from '../types';
import { Intersection } from './intersection';

/**
 * Returns the length of the Array `T`, provided it is not `number`
 *
 * @typedef {Object} ArrayItem
 * @hidden
 * @ignore
 * @internal
 * @category Utility
 * @example
 * ```
 * type A = DefinedLength<string[]> // === never
 * type B = DefinedLength<['hello', 'goodbye']> // === 2
 * ```
 */
type DefinedLength<T extends Readonly<AnyArray>> =
  number extends T['length'] ? never : T['length'];

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
