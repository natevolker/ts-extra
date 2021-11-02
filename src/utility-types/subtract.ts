import { TupleOf } from '../tuple';

export type Subtract<T extends number, U extends number> =
  U extends 0
    ? T
    : U extends T
      ? 0
      : TupleOf<unknown, T> extends [...TupleOf<unknown, U>, ...infer V]
        ? V['length']
        : never;
