const isBrowser = process.browser


export function encode (str) {
  return isBrowser ? btoa(str) : Buffer.from(str).toString('base64')
}

export function decode (str) {
  return isBrowser ? atob(str) : Buffer.from(str, 'base64').toString()
}
