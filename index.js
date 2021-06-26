'use strict'

// support both Windows and UNIX UNC paths
const pattern = /^[\/|\\]{2}[^\/\\]+[^]*/g
const patternCapture = /^[\/\\]{2}(?<server>[^\/\\]+)(?<resource>[^]*)/

function createEmptyCapture() {
  return {
    server: '',
    resource: '',
  }
}

/**
 * Checks whether the given path is a UNC one.
 * @param	{string} path
 * @returns {boolean}
 */
function isValid(path) {
  if (!path) {
    return false
  }

  // reset the lastIndex since we reuse the same pattern
  pattern.lastIndex = -1

  return pattern.test(path)
}

/**
 * Parses the provided UNC path.
 * @param {string} path
 * @returns {{ server: string, resource: string }} returns UNC path's components
 */
function parse(path) {
  if (!path) {
    return createEmptyCapture()
  }

  patternCapture.lastIndex = -1

  const match = path.match(patternCapture)

  if (match && match.groups) {
    const result = {}

    for (let capture in match.groups) {
      result[capture] = match.groups[capture]
    }

    return result
  } else {
    return createEmptyCapture()
  }
}

module.exports = { isValid, parse }
