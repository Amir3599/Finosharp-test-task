import React from 'react'
import { Outlet } from 'react-router'

// login pages layout implementation
// outlet will render nested routes in auth pathname

function LoginPagesLayout() {
    return (
        <div className="">
            <div className="h-screen w-screen xl:w-[75vw] mx-auto shadow-md">
                <Outlet />
            </div>
        </div>
    )
}

export default LoginPagesLayout