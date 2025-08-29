<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-unc-path/main/media/unc-path.png" alt="Icon of UNC Path" width="256" height="256">
  <h1>UNC Path</h1>
</div>

<br>

<h4 align="center">
  🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🌐 Detects UNC paths for both Windows and UNIX formats
- 🖥️ Extracts `server` and `resource` parts with named capture groups
- 📦 Returns a typed object with `server` and `resource` keys
- 🧩 Simple API with `isValid()` and `parse()` functions
- ⚡ Lightweight, zero‑dependency implementation
- 🛡️ Handles empty or invalid inputs gracefully
- 🔍 Uses clear, maintainable regular expressions
- 📝 TypeScript types for strong, predictable usage
- 🔄 Reusable patterns for consistent path parsing

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/unc-path
```

```bash
yarn add @igorskyflyer/unc-path
```

```bash
npm i @igorskyflyer/unc-path
```

<br>
<br>

## 🤹🏼 API

`isValid()` `=>` returns whether the given path is a UNC one.

<br>

Signature

```ts
isValid(path): boolean
```

<br>

Parameters

```ts
path: string // a string that represents the path to process
```

<br>

#### 🗒️ Examples

```ts
import { isValid } from '@igorskyflyer/unc-path'

console.log(isValid('//ComputerName/SharedFolder/')) // returns true
console.log(isValid('//ComputerName/SharedFolder/file.mp4')) // returns true
console.log(isValid('/ComputerName/SharedFolder/')) // returns false
```

<br>
<br>

`parse()` `=>` parses the provided UNC path and returns UNC path's components as

```ts
{
	'server': string,
	'resource': string
}
```

<br>

Signature

```ts
parse(path): Object
```

<br>

Parameters

```ts
path: string // a string that represents the path to process
```

<br>

#### Example

```ts
import { parse } from '@igorskyflyer/unc-path'

console.log(parse('//Server/Dev/file.js'))
/*
returns {
      		server: 'Server',
        	resource: '/Dev/file.js',
      	}
*/

console.log(parse('/Server/Dev/file.js'))
/*
returns {
      		server: '',
       		resource: '',
      	}
*/
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-unc-path/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-unc-path/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/encode-entities](https://www.npmjs.com/package/@igorskyflyer/encode-entities)

> _🏃‍♂️ Fast and simple Map and RegExp based HTML entities encoder. 🍁_

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

[@igorskyflyer/upath](https://www.npmjs.com/package/@igorskyflyer/upath)

> _🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬_

[@igorskyflyer/is-rootdir](https://www.npmjs.com/package/@igorskyflyer/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

[@igorskyflyer/valid-path](https://www.npmjs.com/package/@igorskyflyer/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
