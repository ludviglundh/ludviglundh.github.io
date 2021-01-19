import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../utils/colorUtils'
import device from '../utils/deviceUtils'

const MainContainer = styled.div`
  padding-top: 65px;
  background-color: ${(props) => props.background};
`

const Main = styled.main`
  width: 100%;
  position: relative;
  min-height: ${(props) =>
    props.goFullHeight ? `calc(100vh - 65px)` : `calc(100vh - 65px - 170px)`};
  @media ${device.tablet} {
    min-height: ${(props) =>
      props.goFullHeight ? `calc(100vh - 60px)` : `calc(100vh - 60px - 170px)`};
  }
`

export default function Page({ children, goFullHeight, background }) {
  return (
    <MainContainer background={background}>
      <Main goFullHeight={goFullHeight}>{children}</Main>
    </MainContainer>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  goFullHeight: PropTypes.bool,
  background: PropTypes.string,
}

Page.defaultProps = {
  goFullHeight: true,
  background: COLORS.turquiose,
}
