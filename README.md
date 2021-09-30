# ts-extra
Extended utility types and functions for TypeScript

------

[github](https://github.com/oakfinch/ts-extra) | [docs](https://oakfinch.github.io/ts-extra/modules.html) | [npm](https://www.npmjs.com/package/@oakfinch/ts-extra)

------

## Installation

Using `npm`:

```
npm install --save-dev @oakfinch/ts-extra
```

Using `yarn`:

```
yarn add -D @oakfinch/ts-extra
```

## Usage

See [the API documentation](https://natevolker.github.io/ts-extra/modules.html) for details

## Examples

```TypeScript
import { Mutable } from '@oakfinch/ts-extra'
const DEFAULTS = [1, 2, 3] as const;

const fn = <T extends number[]>(
  first: number,
  rest: T,
) => first + Math.max(...rest);

// This generates a TS error:
// Argument of type 'readonly [1, 2, 3]' is not assignable to parameter of type 'number[]'.
// The type 'readonly [1, 2, 3]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
const result = fn(1, DEFAULTS);

// This works fine!
const result = fn(1, (DEFAULTS as Mutable<typeof DEFAULTS>));
```

```TypeScript
import { Value, Tuple } from '@oakfinch/ts-extra'

const ENV_CONFIG = {
  LOCAL: {
    NAME: 'local',
    MINIFY: false,
  },
  DEV: {
    NAME: 'dev',
    MINIFY: false,
  },
  QA: {
    NAME: 'qa',
    MINIFY: true,
  },
  STAGE: {
    NAME: 'stage',
    MINIFY: true,
  },
  PROD: {
    NAME: 'prod',
    MINIFY: true,
  },
} as const;

const MINIFY_ENV_NAMES = (
  Object.values(ENV_CONFIG)
    .filter(({ MINIFY }) => MINIFY)
    .map(({ NAME }) => NAME)
) as Tuple<Extract<Value<typeof ENV_CONFIG>, { MINIFY: true }>['NAME']>;

// const MINIFY_ENV_NAMES: ["qa", "stage", "prod"];
```

