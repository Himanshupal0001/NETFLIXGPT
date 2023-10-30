import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupLandingPage from '../pages/SignupLandingPage'
import SignupRegistrationPage from '../pages/SignupRegistrationPage'
import SignupRegFormPage from '../pages/SignupRegFormPage'
import SignupPlane from '../pages/SignupPlane'
import SignupChoosePlan from '../pages/SignupChoosePlan'
import LoginPage from '../pages/LoginPage'
import ProtectedRoutes from './ProtectedRoutes'
import Browsr from '../pages/Browsr'
function Router() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <SignupLandingPage />
        },
        {
            path: '/signup/registration',
            element: <SignupRegistrationPage />
        },
        {
            path: '/signup/regform',
            element: <SignupRegFormPage />
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            element: <ProtectedRoutes />,
            children: [
                {
                    path: '/signup',
                    element: <SignupPlane />
                },
                {
                    path: '/signup/planform',
                    element: <SignupChoosePlan />
                },
                {
                    path: '/browse',
                    element: <Browsr />
                }
            ]
        }
    ])
    return (
        <RouterProvider router={routes} />
    )
}

export default Router
