import { TupleOf } from '../tuple';

export type Add<T extends number, U extends number> =
  T extends 0 ? U :
    U extends 0 ? T :
      [...TupleOf<unknown, T>, ...TupleOf<unknown, U>]['length'];
