/**
 * Removes the `readonly` prefix from `T`
 *
 * @category Utility
 * @example
 * ```
 * type A = Mutable<readonly [1,2,3]> // === [1,2,3]
 * type B = Mutable<{ readonly foo: 'FOO' }> // === { foo: 'FOO' }
 * ```
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
