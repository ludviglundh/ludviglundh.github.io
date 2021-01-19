export const TEXT_SIZES = {
  reduced: {
    fontSize: 15,
    lineHeight: 23,
  },
  regular: {
    fontSize: 16,
    lineHeight: 28,
  },
  increased: {
    fontSize: 19,
    lineHeight: 33,
  },
  large: {
    fontSize: 24,
    lineHeight: 40,
  },
  huge: {
    fontSize: 31,
    lineHeight: 50,
  },
  giant: {
    fontSize: 39,
    lineHeight: 62,
  },
}

export const FONT_SIZES = [
  'reduced',
  'regular',
  'increased',
  'large',
  'huge',
  'giant',
]

export const FONT_TYPES = ['primary', 'secondary', 'danger']

export function getFontSize(sizeName = 'regular') {
  return TEXT_SIZES[sizeName].fontSize
}

export function getLineHeight(sizeName = 'regular') {
  return TEXT_SIZES[sizeName].lineHeight
}
