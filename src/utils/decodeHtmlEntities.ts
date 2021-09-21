export function decodeHtmlEntities(text: string) {
  if (typeof text !== 'string') {
    throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`)
  }

  const decoded = text

  const entities: any = {
    '&amp;': '\u0026',
    '&quot;': '\u0022',
    '&#039;': '\u0027',
  }

  return decoded.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char])
}
