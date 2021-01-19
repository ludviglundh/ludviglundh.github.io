import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../utils/colorUtils'

import { FONT_SIZES, getFontSize, getLineHeight } from '../utils/fontUtils'

const StyledText = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => getFontSize(props.size)};
  line-height: ${(props) => getLineHeight(props.size)}
  font-weight: ${(props) => (props.bold ? 800 : 400)};
`

export default function Text({ bold, as, color, size, children }) {
  return (
    <StyledText bold={bold} color={color} size={size} as={as}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  bold: PropTypes.bool,
  as: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(FONT_SIZES),
  children: PropTypes.node,
}

Text.defaultProps = {
  bold: false,
  as: undefined,
  color: COLORS.white,
  size: 'regular',
  children: undefined,
}
