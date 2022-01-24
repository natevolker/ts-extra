/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Converts a Union `T` to an Intersection
 *
 * @category Utility
 * @example
 * ```
 * type A = Intersection<{ foo: 'FOO' } | { bar: 'BAR' }> // === { foo: 'FOO' } & { bar: 'BAR' }
 * ```
 */
export type Intersection<T> = (
  T extends any ? (arg: T) => void : never
) extends (arg: infer U) => void
  ? U
  : never;
