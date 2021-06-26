const chai = require('chai').assert

const { isValid, parse } = require('../index')

describe('unc-path tests', () => {
  describe('isValid', () => {
    describe('UNIX', () => {
      it('isValid("//ComputerName/SharedFolder/") should return true', () => {
        chai.isTrue(isValid('//ComputerName/SharedFolder/'))
      })

      it('isValid("//ComputerName/SharedFolder") should return true', () => {
        chai.isTrue(isValid('//ComputerName/SharedFolder'))
      })

      it('isValid("//ComputerName/SharedFolder/file.mp4") should return true', () => {
        chai.isTrue(isValid('//ComputerName/SharedFolder/file.mp4'))
      })

      it('isValid("/ComputerName/SharedFolder/") should return false', () => {
        chai.isFalse(isValid('/ComputerName/SharedFolder/'))
      })

      it('isValid("./ComputerName/SharedFolder/") should return false', () => {
        chai.isFalse(isValid('./ComputerName/SharedFolder/'))
      })
    }) // UNIX UNC

    describe('Windows', () => {
      it('isValid("\\\\ComputerName\\SharedFolder") should return true', () => {
        chai.isTrue(isValid('\\\\ComputerName\\SharedFolder'))
      })

      it('isValid("\\\\ComputerName\\SharedFolder\\") should return true', () => {
        chai.isTrue(isValid('\\\\ComputerName\\SharedFolder\\'))
      })

      it('isValid("\\\\ComputerName\\SharedFolder\\file.mp4") should return true', () => {
        chai.isTrue(isValid('\\\\ComputerName\\SharedFolder\\file.mp4'))
      })

      it('isValid("\\ComputerName\\SharedFolder\\") should return false', () => {
        chai.isFalse(isValid('\\ComputerName\\SharedFolder\\'))
      })

      it('isValid(".\\ComputerName\\SharedFolder\\") should return false', () => {
        chai.isFalse(isValid('.\\ComputerName\\SharedFolder\\'))
      })
    }) // Windows UNC
  }) // isValid

  describe('parse()', () => {
    it('parse("//ComputerName/SharedFolder") should return an object', () => {
      chai.deepEqual(parse('//ComputerName/SharedFolder'), {
        server: 'ComputerName',
        resource: '/SharedFolder',
      })
    })

    it('parse("//Server/Dev/file.js") should return an object', () => {
      chai.deepEqual(parse('//Server/Dev/file.js'), {
        server: 'Server',
        resource: '/Dev/file.js',
      })
    })

    it('parse("/Server/Dev/file.js") should return an empty object', () => {
      chai.deepEqual(parse('/Server/Dev/file.js'), {
        server: '',
        resource: '',
      })
    })
  })
}) // unc-path tests
