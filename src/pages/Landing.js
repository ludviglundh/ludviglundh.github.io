import React from 'react'
import Page from '../components/Page'
import Text from '../components/Text'
import COLORS from '../utils/colorUtils'
import Row from '../components/Row'

export default function Landing() {
  return (
    <Page>
      <Row noGutters>
        <Text color={COLORS.black} size="giant">
          Hello
        </Text>
      </Row>
    </Page>
  )
}
