import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledRow = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  ${(props) =>
    !props.noGutters ? 'margin-right: -15px; margin-left: -15px;' : ''}
`

export default function Row({
  noGutters,
  children,
  className,
  style,
  onClick,
}) {
  return (
    <StyledRow
      className={className}
      noGutters={noGutters}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.instanceOf(PropTypes.any),
  onClick: PropTypes.func,
}

Row.defaultProps = {
  noGutters: false,
  children: undefined,
  className: undefined,
  style: undefined,
  onClick: undefined,
}
