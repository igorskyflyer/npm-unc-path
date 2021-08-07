# UNC Path

🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱

<br>

<p align="center">
	<img src="https://github.com/igorskyflyer/npm-unc-path/raw/main/assets/unc-path.png" alt="UNC Path" width="180" height="180">
</p>

<br>
<br>

✨ Since version `2.0.0` `unc-path` is a hybrid module that supports both CommonJS (legacy) and ES modules, thanks to [Modern Module](https://github.com/igorskyflyer/npm-modern-module).

<br>

### Usage

<br>

Install it first by doing

```shell
npm i @igor.dvlpr/unc-path
```

and call `require` in your code, i.e.:

```js
const unc = require('@igor.dvlpr/unc-path')
// or destructure the object and import only needed function(s)
// e.g.
const { isValid } = require('@igor.dvlpr/unc-path')

// do something cool with it
```

<br>

#### API

<br>

`isValid()` `=>` returns whether the given path is a UNC one.

<br>

Signature

```js
isValid(path): boolean
```

<br>

Parameters

```js
path: string // a string that represents the path to process
```

<br>

#### Example

```js
const { isValid } = require('@igor.dvlpr/unc-path')

console.log(isValid('//ComputerName/SharedFolder/')) // returns true
console.log(isValid('//ComputerName/SharedFolder/file.mp4')) // returns true
console.log(isValid('/ComputerName/SharedFolder/')) // returns false
```

<br>
<br>

`parse()` `=>` parses the provided UNC path and returns UNC path's components as

```js
{
	'server': string,
	'resource': string
}
```

<br>

Signature

```js
parse(path): Object
```

<br>

Parameters

```js
path: string // a string that represents the path to process
```

<br>

#### Example

```js
const { parse } = require('@igor.dvlpr/unc-path')

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
