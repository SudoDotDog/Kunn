# Kunn

[![Build Status](https://travis-ci.com/SudoDotDog/Kunn.svg?branch=master)](https://travis-ci.com/SudoDotDog/Kunn)
[![codecov](https://codecov.io/gh/SudoDotDog/Kunn/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Kunn)
[![npm version](https://badge.fury.io/js/kunn.svg)](https://www.npmjs.com/package/kunn)
[![downloads](https://img.shields.io/npm/dm/kunn.svg)](https://www.npmjs.com/package/kunn)

:dolphin: Interfacing

## Resources

-   [Submodule Status and List](/docs/submodule.md)

## Install

```sh
npm install kunn -g
# OR
yarn global add kunn
```

## Usage

To generate type definition

```sh
kunn typescript <...path to config file> -o <...path to output file> # Typescript .d.ts file
kunn go <...path to config file> -o <...path to output file> # GoLang .go file
```

To host development server

```sh
kunn serve <...path to config file>
```

## Development

```sh
make install
make link
make dev
# Linked environment path
...kunn {...}
```

## Test

```sh
make tests
```

## Build

```sh
make build
```
