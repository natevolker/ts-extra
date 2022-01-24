import { AnyArray } from "../types/any-array";
import { Length } from "./length";
import { Range } from "./range";

export type ArrayIndex<T extends Readonly<AnyArray>> = Length<T> extends never
  ? number
  : Exclude<Range<Length<T>>, Length<T>>;
