import Login from '@src/pages/login'
import Layout from '@src/pages/layout'
import Profile from '@src/pages/profile'
import Project from '@src/pages/project'
import ProjectCreate from '@src/pages/project/projectCreate'
import TranslationPage from '@src/pages/translation'
import FileList from '@src/pages/translation/FileList'
import WorkSpace from '@src/pages/translation/workspace'
import View from '@src/pages/translation/view'
import Account from '@src/pages/account'

export interface IRouter {
  path: string
  component?: JSX.Element | React.ReactNode
  redirect?: string
  exact?: boolean
  meta?: any
  routes?: IRouter[]
}

const routes: Array<IRouter> = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/',
    component: Layout,
    routes: [
      { path: '/', redirect: '/profile', exact: true },
      { path: '/profile', component: Profile },
      { path: '/project', component: Project },
      { path: '/projectCreate', component: ProjectCreate },
      {
        path: '/translation',
        component: TranslationPage,
        routes: [
          { path: '/translation', redirect: '/translation/fileList', exact: true },
          { path: '/translation/fileList', component: FileList },
          { path: '/translation/workspace', component: WorkSpace },
          { path: '/translation/view', component: View },
        ]
      },
      { path: '/account', component: Account },
    ]
  },
]


export default routes