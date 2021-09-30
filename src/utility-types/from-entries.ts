import { Simplify } from './simplify';
import { Unshift } from './unshift';
import { Index } from '../types/object-index';

/**
 * An object constructed from entries `T` (like those returned from `Object.entries`)
 *
 * @typedef {Object} FromEntries
 * @category Utility
 * @example
 * ```
 * type A = FromEntries<[['foo', 'FOO'],['bar', 'BAR']]> // === {foo: 'FOO', bar: 'BAR'}
 * ```
 */
export type FromEntries<T extends [Index, Index][]> =
  Unshift<T> extends [[infer K0, infer V0], infer TRest]
    ? K0 extends Index
      ? TRest extends [Index, Index][]
        ? Simplify<{ [P in K0]: V0 } & FromEntries<TRest>>
        : never
      : never
    : never;
