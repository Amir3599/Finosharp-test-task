import React from 'react'
import { Outlet } from 'react-router'

// Main  pages layout implementation
// outlet will render nested routes in main pathname

function MainPagesLayout() {

    return (
        <div className='w-screen min-h-screen xl:max-w-[75%] mx-auto bg-gray-100'>
            <Outlet />
        </div>
    )
}

export default MainPagesLayout