import React, { lazy } from 'react'
import { RouteObject } from 'react-router'

import { LoginPagesLayout } from 'common/layouts'
import { Loadable } from 'components/common'

const SignInPage = Loadable(lazy(() => import('pages/auth/login/SignInPage')))
const SignUpPage = Loadable(lazy(() => import('pages/auth/signUp/SignUpPage')))

const AuthenticationRoutes: RouteObject = {
    path: '/auth',
    element: <LoginPagesLayout />,
    children: [
        {
            path: 'login',
            element: <SignInPage />
        },
        {
            path: 'signup',
            element: <SignUpPage />
        },
    ]
}


export default AuthenticationRoutes