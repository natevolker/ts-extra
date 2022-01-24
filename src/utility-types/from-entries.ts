import { Simplify } from "./simplify";
import { Unshift } from "./unshift";
import { Index } from "../types/object-index";
import { EmptyObject } from "../types/empty-object";
import { Length } from "./length";
import { Entries } from "./entries";
import { AnyObject } from "../types/any-object";

type FromEntriesInner<
  T extends Entries<AnyObject>,
  U = EmptyObject
> = Length<T> extends never
  ? Record<T[number][0], T[number][1]>
  : Unshift<T> extends [[infer K0, infer V0], infer TRest]
  ? K0 extends Index
    ? TRest extends Entries<AnyObject>
      ? FromEntriesInner<TRest, U & Record<K0, V0>>
      : never
    : U
  : never;

/**
 * An object constructed from entries `T` (like those returned from `Object.entries`)
 *
 * @category Utility
 * @example
 * ```
 * type A = FromEntries<[['foo', 'FOO'],['bar', 'BAR']]> // === {foo: 'FOO', bar: 'BAR'}
 * ```
 */
export type FromEntries<T extends Entries<AnyObject>> = Simplify<
  FromEntriesInner<T>
>;
