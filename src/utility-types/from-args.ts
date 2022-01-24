/* eslint-disable @typescript-eslint/no-explicit-any */
import { Length } from "./length";

export type FromArgs<
  T extends readonly any[],
  U extends readonly any[] = []
> = Length<T> extends never
  ? T
  : T extends never[]
  ? U
  : ((...args: T) => any) extends (first: any, ...rest: infer ARest) => any
  ? FromArgs<ARest, [...U, T[0]]>
  : never;
