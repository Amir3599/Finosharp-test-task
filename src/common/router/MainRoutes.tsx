import { MainPagesLayout } from 'common/layouts'

import React, { lazy } from 'react'
import { RouteObject } from 'react-router'

// const MainPage = Loadable(lazy(() => import('pages/main/MainPage')))
// const InterpreterPage = Loadable(lazy(() => import('pages/main/interpreter/InterpreterPage')))
// const ProfilePage = Loadable(lazy(() => import('pages/main/profile/ProfilePage')))
// const HomePage = Loadable(lazy(() => import('pages/main/home/HomePage')))
// const FileDetailsPage = Loadable(lazy(() => import('pages/main/filedetail/FileDetails')))

const MainRoutes: RouteObject = {
    path: '/main',
    element: <MainPagesLayout />,
    children: []
}


export default MainRoutes