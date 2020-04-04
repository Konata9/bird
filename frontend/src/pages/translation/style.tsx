import styled from 'styled-components'
import { borderGray } from '@pages/style/color'

export const TopBarWrapper = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WorkSpaceWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const TextList = styled.ul`
  flex: 1 1 25%;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Studio = styled.div`
  flex: 1 1 50%;
  border: 1px solid ${borderGray};
`

export const RightBar = styled.div`
  flex: 1 1 25%;
`