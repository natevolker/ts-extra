/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefinedLength } from './defined-length';

export type FromArgs<T extends readonly any[], U extends readonly any[] = []> =
  DefinedLength<T> extends never
    ? T
    : T extends never[]
      ? U
      : ((...args: T) => any) extends ((first: any, ...rest: infer ARest) => any)
        ? FromArgs<ARest, [...U, T[0]]>
        : never;
