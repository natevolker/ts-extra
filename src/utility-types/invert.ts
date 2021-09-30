import { Simplify } from './simplify';
import { Index } from '../types';
import { Value } from './value';
import { Intersection } from './intersection';

/**
 * Inverts the keys and values of type `T`
 *
 * @typedef {Object} Invert
 * @category Utility
 * @example
 * ```
 * type A = Invert<{ foo: 'FOO', bar: 'BAR' }> // === { FOO: 'foo', BAR: 'bar' }
 * ```
 */
export type Invert<T extends { [index: Index]: Index }> = Simplify<Intersection<Value<{
  [PKey in keyof T]: { [PVal in T[PKey]]: PKey }
}>>>;
