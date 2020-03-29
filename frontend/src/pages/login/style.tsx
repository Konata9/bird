import styled from 'styled-components'
import { bgDark, fontLight } from '@pages/style/color'

export const PageLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const LeftPannel = styled.div`
  width: 50%;
  background: ${bgDark};
  color: ${fontLight};
  display: flex;
  justify-content: center;
`

export const Agenda = styled.div`
  width: 80%;
  margin-top: 30%;
  color: ${fontLight};

  h1{
    font-size: 3rem;
    color: ${fontLight};
  }

  p{
    font-size: 1.5rem;
  }
`

export const TagWrapper = styled.div`

`

export const RightPannel = styled.div`
  flex: 1;
`

export const FormLayout = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30%;
`

export const StyledLabel = styled.span`
  font-size: 1rem;
`