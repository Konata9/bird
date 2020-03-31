import styled from 'styled-components'
import { bgWhite, fontLight, fontDark, fontBlue } from './color'
import { Link, LinkProps } from 'react-router-dom'

interface IRouterLink extends LinkProps {
  color?: string
}

interface ICommonLink {
  color?: string
}

export const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: ${fontLight};
  background: ${bgWhite};
  box-sizing: border-box;
`

export const RouterLink = styled(Link)`
  color: ${({ color = fontDark }: IRouterLink) => color};

  &:hover{
    color: ${({ color = fontDark }: IRouterLink) => color};
  }
`

export const ActionLink = styled.a`
  color: ${({ color = fontBlue }: ICommonLink) => color};

  &: hover{
    color: ${({ color = fontBlue }: ICommonLink) => color};
    text - decoration: none;
  }
`