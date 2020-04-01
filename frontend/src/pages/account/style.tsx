import styled from 'styled-components'
import { fontDark } from '@pages/style/color'

export const PageTitle = styled.h1`
  color: ${fontDark};
`

export const ContentTitle = styled.h2`
  color: ${fontDark};
`

export const AccountWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const AvatarWrapper = styled.div`
  width: 20%;
  max-width: 20%;
  margin-right: 20px;
  display: block;
  text-align: center;
`

export const UserAvatar = styled.img`
  width: 220px;
  height: 220px;
  object-fit: contain;
`

export const InfoWrapper = styled.div`
  width: 100%;

`