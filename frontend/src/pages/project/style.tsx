import styled from 'styled-components'
import { bgGray } from '@pages/style/color'

import { Card } from 'antd'

export const ProjectBlock = styled.div`
  width: 100%;
  display: flex;
`

export const ProjectTable = styled.div`
  width: 70%;
  max-width: 70%;
  margin-right: 20px;
`

export const InfoCard = styled(Card)`
  background: ${bgGray};
`

export const InfoWrapper = styled.div`
  flex: 1;
`