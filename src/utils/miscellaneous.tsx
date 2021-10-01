import DOMPurify from 'dompurify'

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content?: string | null) => {
  if (content) {
    return process.browser ? DOMPurify.sanitize(content) : content
  }
  return ''
}

/**
 * Get Singular or plural text.
 *
 * @param {Int} count Count.
 * @param {String} text text.
 *
 * @returns {string} Singular or plural from of text.
 */
export const getSingularOrPluralText = (count: number, text: string) => {
  return 1 < count ? `${text}s` : text
}
