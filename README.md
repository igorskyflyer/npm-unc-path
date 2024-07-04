# UNC Path

<br>

🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱

<br>

<p align="center">
	<img src="https://github.com/igorskyflyer/npm-unc-path/raw/main/assets/unc-path.png" alt="UNC Path" width="180" height="180">
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/unc-path"
```

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

#### Example

```ts
import { isValid } from '@igor.dvlpr/unc-path'

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
import { parse } from '@igor.dvlpr/unc-path'

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

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-unc-path/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/encode-entities](https://www.npmjs.com/package/@igor.dvlpr/encode-entities)

> _🏃‍♂️ Fast and simple Map and RegExp based HTML entities encoder. 🍁_

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

[@igor.dvlpr/upath](https://www.npmjs.com/package/@igor.dvlpr/upath)

> _🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬_

[@igor.dvlpr/is-rootdir](https://www.npmjs.com/package/@igor.dvlpr/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

[@igor.dvlpr/valid-path](https://www.npmjs.com/package/@igor.dvlpr/valid-path)

> _🧰 Provides ways of testing whether a given value can be a valid file/directory name. 🏜_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
