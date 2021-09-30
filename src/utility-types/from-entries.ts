/* eslint-disable @typescript-eslint/no-explicit-any */
import { Simplify } from './simplify';
import { Unshift } from './unshift';
import { Index } from '../types/object-index';

/**
 * An object constructed from entries `T` (like those returned from `Object.entries`)
 *
 * @category Utility
 * @example
 * ```
 * type A = FromEntries<[['foo', 'FOO'],['bar', 'BAR']]> // === {foo: 'FOO', bar: 'BAR'}
 * ```
 */
export type FromEntries<T extends [Index, any][]> =
  Unshift<T> extends [[infer K0, infer V0], infer TRest]
    ? K0 extends Index
      ? TRest extends [Index, any][]
        ? Simplify<{ [P in K0]: V0 } & FromEntries<TRest>>
        // eslint-disable-next-line @typescript-eslint/ban-types
        : { }
      // eslint-disable-next-line @typescript-eslint/ban-types
      : { }
    // eslint-disable-next-line @typescript-eslint/ban-types
    : { };
