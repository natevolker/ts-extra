/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyObject } from '../types';

/**
 * Attempts to expand type definitions
 *
 * @category Utility
 * @example
 * ```
 * // When you have a complex type, like so:
 *
 * interface T0 {
 *   a: string
 *   b: string
 *   d: string
 * }
 *
 * interface T1 {
 *   d: string
 *   e: string
 *   f: string
 * }
 *
 * interface T2 {
 *   g: string
 *   h: string
 *   i: string
 * }
 *
 * type Complex = Partial<Record<keyof T0, Value<T1>>> & T2
 *
 * // The type hints shown by TypeScript may not always be helpful. For example,
 * // hovering over `Complex` in VS Code shows:
 *
 * type Complex = Partial<Record<keyof T0, string>> & T2
 *
 * // However, if you wrap that definition in Simplify, like so:
 *
 * type Complex = Simplify<Partial<Record<keyof T0, Value<T1>>> & T2>
 *
 * // The hover hint in VS Code will then display the type as:
 *
 * type Complex = {
 *   a?: string | undefined;
 *   b?: string | undefined;
 *   d?: string | undefined;
 *   g: string;
 *   h: string;
 *   i: string;
 * }
 * ```
 */
export type Simplify<T extends any> = T extends AnyObject ? { [P in keyof T]: T[P] } : T;
