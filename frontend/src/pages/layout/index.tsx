import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Divider } from 'antd'
import { StyledLayout } from '@src/pages/style/layout'
import RenderRoutes from '@src/pages/renderRoutes'
import { IRouter } from '@src/pages/routes'

import { Header, Container, ContentWrapper } from './style'
import NavBar from './navbar'

interface IProps {
  routes: IRouter[]
}

const Layout = inject()(
  observer(
    ({ routes }: IProps) => {
      return (
        <StyledLayout>
          <Header>
            <NavBar />
          </Header>
          <Container>
            <ContentWrapper>
              <RenderRoutes routes={routes} />
            </ContentWrapper>
          </Container>
        </StyledLayout >
      )
    }
  )
)


export default Layout