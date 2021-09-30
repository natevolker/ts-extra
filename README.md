# ts-extra
Extended utility types and functions for TypeScript

========

[https://github.com/natevolker/ts-extra](github) | [https://natevolker.github.io/ts-extra/modules.html](docs)

========

## Installation

Using `npm`:

```
npm install --save-dev ts-extra
```

Using `yarn`:

```
yarn add -D ts-extra
```

## Usage

See [the API documentation](https://natevolker.github.io/ts-extra/modules.html) for details

## Examples

```TypeScript
import { Mutable } from 'ts-extra';
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
import { Value, Tuple } from 'ts-extra';

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

