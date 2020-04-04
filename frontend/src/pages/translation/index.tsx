import React from 'react'
import { inject, observer } from 'mobx-react'

import { PageTitle, ContentTitle } from '@pages/style/layout'

import RenderRoutes from '@pages/renderRoutes'
import TopBar from './topBar'

const TranslationPage = ({ routes }: any) => {
  return (
    <>
      <PageTitle>Translation Page</PageTitle>
      <TopBar />
      <RenderRoutes routes={routes} />
    </>
  )
}

export default TranslationPage