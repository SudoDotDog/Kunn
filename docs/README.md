# Kunn

[![Build Status](https://travis-ci.com/SudoDotDog/Kunn.svg?branch=master)](https://travis-ci.com/SudoDotDog/Kunn)
[![codecov](https://codecov.io/gh/SudoDotDog/Kunn/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Kunn)
[![npm version](https://badge.fury.io/js/kunn.svg)](https://www.npmjs.com/package/kunn)
[![downloads](https://img.shields.io/npm/dm/kunn.svg)](https://www.npmjs.com/package/kunn)

:dolphin: Interfacing, between people, between machine

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

## Submodule Package Status

[Kunn-Core](https://github.com/SudoDotDog/Kunn-Core)

[![Build Status](https://travis-ci.com/SudoDotDog/Kunn-Core.svg?branch=master)](https://travis-ci.com/SudoDotDog/Kunn-Core)
[![codecov](https://codecov.io/gh/SudoDotDog/Kunn-Core/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Kunn-Core)
[![npm version](https://badge.fury.io/js/%40kunn%2Fcore.svg)](https://www.npmjs.com/package/@kunn/core)
[![downloads](https://img.shields.io/npm/dm/@kunn/core.svg)](https://www.npmjs.com/package/@kunn/core)

[Kunn-Support](https://github.com/SudoDotDog/Kunn-Support)

[![Build Status](https://travis-ci.com/SudoDotDog/Kunn-Support.svg?branch=master)](https://travis-ci.com/SudoDotDog/Kunn-Support)
[![codecov](https://codecov.io/gh/SudoDotDog/Kunn-Support/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Kunn-Support)
[![@kunn/go version](https://img.shields.io/npm/v/@kunn/go.svg?color=%2300ADD8&label=%40kunn%2Fgo&style=popout)](https://www.npmjs.com/package/@kunn/go)
[![@kunn/typescript version](https://img.shields.io/npm/v/@kunn/typescript.svg?color=%23007ACC&label=%40kunn%2Ftypescript&style=popout)](https://www.npmjs.com/package/@kunn/typescript)

[Kunn-Server](https://github.com/SudoDotDog/Kunn-Server)

[![Build Status](https://travis-ci.com/SudoDotDog/Kunn-Server.svg?branch=master)](https://travis-ci.com/SudoDotDog/Kunn-Server)
[![codecov](https://codecov.io/gh/SudoDotDog/Kunn-Server/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Kunn-Server)
[![npm version](https://badge.fury.io/js/%40kunn%2Fserver.svg)](https://www.npmjs.com/package/@kunn/server)
[![downloads](https://img.shields.io/npm/dm/@kunn/server.svg)](https://www.npmjs.com/package/@kunn/server)
