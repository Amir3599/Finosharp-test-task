import React from 'react'
import { Logo } from 'assets'
import Navbar from '../Navbar/Navbar'
import HeaderButtons from './HeaderButtons'

const Header = () => {
    return (
        <header className='sticky top-0 left-0 right-0 dark:bg-dark-main-color dark:text-app-white text-light-main-color py-2 px-4 bg-app-bg'>
            <div className='flex items-center justify-between'>
                <div className='min-w-fit'><Logo /></div>
                <Navbar />
                <HeaderButtons />
            </div>
        </header>
    )
}

export default Header