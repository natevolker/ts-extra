# ts-extra

Extended utility types and functions for TypeScript

[![TypeScript](https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)

[![npm](https://badgen.net/npm/v/@oakfinch/ts-extra)](https://npmjs.com/package/@oakfinch/ts-extra)

[![license](https://badgen.net/github/license/@oakfinch/ts-extra)](https://github.com/oakfinch/ts-extra/blob/main/LICENSE)

[![Build](https://github.com/oakfinch/ts-extra/actions/workflows/build.yml/badge.svg)](https://github.com/oakfinch/ts-extra/actions/workflows/build.yml)

[![Tests](https://github.com/oakfinch/ts-extra/actions/workflows/tests.yml/badge.svg)](https://github.com/oakfinch/ts-extra/actions/workflows/tests.yml)

[![CodeQL](https://github.com/oakfinch/ts-extra/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/oakfinch/ts-extra/actions/workflows/codeql-analysis.yml)

------

[![github](https://badgen.net/badge/icon/github?icon=github&scale=2&label=)](https://github.com/oakfinch/ts-extra/)

[![docs](https://badgen.net/badge/%F0%9F%93%8B/documentation?scale=2)](https://oakfinch.github.io/ts-extra/modules.html)

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

See [the API documentation](https://oakfinch.github.io/ts-extra/modules.html) for details

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

