// Author: Igor Dimitrijević (@igorskyflyer)

// support both Windows and UNIX UNC paths
const pattern: RegExp = /^[/\\]{2}[^/\\]+[\s\S]*/g
const patternCapture: RegExp = /^[/\\]{2}(?<server>[^/\\]+)(?<resource>[\s\S]*)/

export type UncPath = {
  [key: string]: string
  server: string
  resource: string
}

/**
 * Checks whether the given path is a UNC one.
 */
export function isValid(path: string): boolean {
  if (!path) {
    return false
  }

  // reset the lastIndex since we reuse the same pattern
  pattern.lastIndex = 0

  return pattern.test(path)
}

/**
 * Parses the provided UNC path.
 * @returns returns a UNC path's components
 */
export function parse(path: string): UncPath {
  const result: UncPath = { server: '', resource: '' }

  if (!path) {
    return result
  }

  patternCapture.lastIndex = 0

  const match: RegExpMatchArray | null = path.match(patternCapture)

  if (match?.groups) {
    for (const capture in match.groups) {
      result[capture] = match.groups[capture]
    }

    return result
  }

  return result
}
