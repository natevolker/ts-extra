import type { TupleOf } from "./tuple";

type RangeOf1<N extends number> = Partial<TupleOf<unknown, N>>["length"];
type RangeOf2<From extends number, To extends number> =
  | Exclude<RangeOf1<To>, RangeOf1<From>>
  | From;

export type Range<
  P extends number,
  T extends number | void = void
> = T extends void ? RangeOf1<P> : RangeOf2<P, Exclude<T, void>>;
