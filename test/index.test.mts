// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { isValid, parse } from '../src/index.mjs'

describe('🧪 UNC Path tests 🧪', () => {
	suite('isValid', () => {
		suite('UNIX', () => {
			test('isValid("//ComputerName/SharedFolder/") should return true', () => {
				assert.isTrue(isValid('//ComputerName/SharedFolder/'))
			})

			test('isValid("//ComputerName/SharedFolder") should return true', () => {
				assert.isTrue(isValid('//ComputerName/SharedFolder'))
			})

			test('isValid("//ComputerName/SharedFolder/file.mp4") should return true', () => {
				assert.isTrue(isValid('//ComputerName/SharedFolder/file.mp4'))
			})

			test('isValid("/ComputerName/SharedFolder/") should return false', () => {
				assert.isFalse(isValid('/ComputerName/SharedFolder/'))
			})

			test('isValid("./ComputerName/SharedFolder/") should return false', () => {
				assert.isFalse(isValid('./ComputerName/SharedFolder/'))
			})
		}) // UNIX UNC

		suite('Windows', () => {
			test('isValid("\\\\ComputerName\\SharedFolder") should return true', () => {
				assert.isTrue(isValid('\\\\ComputerName\\SharedFolder'))
			})

			test('isValid("\\\\ComputerName\\SharedFolder\\") should return true', () => {
				assert.isTrue(isValid('\\\\ComputerName\\SharedFolder\\'))
			})

			test('isValid("\\\\ComputerName\\SharedFolder\\file.mp4") should return true', () => {
				assert.isTrue(isValid('\\\\ComputerName\\SharedFolder\\file.mp4'))
			})

			test('isValid("\\ComputerName\\SharedFolder\\") should return false', () => {
				assert.isFalse(isValid('\\ComputerName\\SharedFolder\\'))
			})

			test('isValid(".\\ComputerName\\SharedFolder\\") should return false', () => {
				assert.isFalse(isValid('.\\ComputerName\\SharedFolder\\'))
			})
		}) // Windows UNC
	}) // isValid

	suite('parse()', () => {
		test('parse("//ComputerName/SharedFolder") should return an object', () => {
			assert.deepEqual(parse('//ComputerName/SharedFolder'), {
				server: 'ComputerName',
				resource: '/SharedFolder'
			})
		})

		test('parse("//Server/Dev/file.js") should return an object', () => {
			assert.deepEqual(parse('//Server/Dev/file.js'), {
				server: 'Server',
				resource: '/Dev/file.js'
			})
		})

		test('parse("/Server/Dev/file.js") should return an empty object', () => {
			assert.deepEqual(parse('/Server/Dev/file.js'), {
				server: '',
				resource: ''
			})
		})
	})
}) // unc-path tests
