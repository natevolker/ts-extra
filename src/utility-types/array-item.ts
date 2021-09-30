/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * A union of all possible values in array `T`
 *
 * @typedef {Object} ArrayItem
 * @category Utility
 * @example
 * ```
 * const arr = [1, 2, 3, 4, 5, 6] as const
 * type Item = ArrayItem<typeof arr> // === 1|2|3|4|5|6
 * ```
 */
export type ArrayItem<T extends readonly any[]> = T[number];
