export function removeLastTrailingSlash(url: string) {
  if (typeof url !== 'string') return url
  return url.replace(/\/$/, '')
}

export function removeExtraSpaces(text: string) {
  if (typeof text !== 'string') return
  return text.replace(/\s+/g, ' ').trim()
}
