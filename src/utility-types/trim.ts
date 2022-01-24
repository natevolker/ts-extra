/** Trim characters from the start of a string */
export type TrimStart<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}` ? TrimStart<Rest, U> : T;

/** Trim characters from the end of a string */
export type TrimEnd<
  T extends string,
  U extends string
> = T extends `${infer Rest}${U}` ? TrimEnd<Rest, U> : T;

/** Trim characters from both ends of a string */
export type Trim<T extends string, U extends string> = TrimStart<
  TrimEnd<T, U>,
  U
>;
