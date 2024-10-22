import { DepositIcon, DownloadIcon, GlobeIcon, NotifIcon, UserIcon } from 'assets';
import { MdDarkMode, MdSunny } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { CusButton } from 'common/modules';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setUI } from 'store/slices/UIsection';
import ProfilePopverContent from 'components/\bProfilePopverContent/\bProfilePopverContent';
import { Popover } from 'flowbite-react';
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import NavbarDrawer from 'components/NavbarDrawer/NavbarDrawer';


const HeaderButtons = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const { theme } = useSelector((state: RootState) => state.ui)
    const dispatch = useDispatch()
    const toggleTheme = () => {
        if (theme === "light") {
            dispatch(setUI({ theme: "dark" }))
        } else {
            dispatch(setUI({ theme: "light" }))
        }
    }
    return (
        <div className='flex justify-between gap-x-4'>
            <Popover
                trigger='click'
                content={<div className='p-4'>Search Popover</div>}
            >
                <button><LuSearch className='scale-125 stroke-[4px] hover:stroke-app-yellow' /></button>
            </Popover>
            <CusButton className='bg-app-yellow hover:enabled:bg-app-yellow/75 dark:bg-app-yellow dark:hover:enabled:bg-app-yellow/75'>
                <DepositIcon svgProps={{ className: "mt-1 scale-[1.2]" }} />
                <span className='text-black ml-2'>Deposit</span>
            </CusButton>
            <Popover
                trigger='hover'
                content={<ProfilePopverContent />}
            >
                <button className='scale-110'><UserIcon /></button>
            </Popover>
            <button className='hidden xl:block scale-110'><NotifIcon /></button>
            <button className='hidden xl:block scale-110'><DownloadIcon /></button>
            <button className='hidden xl:block scale-110'><GlobeIcon /></button>
            <button className='hidden xl:block' onClick={toggleTheme}>{theme === "dark" ? <MdDarkMode className='fill-app-white scale-[1.35] hover:fill-app-yellow' /> : <MdSunny className='fill-black scale-[1.50] hover:fill-app-yellow' />}</button>
            <button className='block xl:hidden' onClick={toggleDrawer}><GiHamburgerMenu className='scale-150 hover:fill-app-yellow' /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='dark:bg-[#1E2329] dark:text-app-white text-light-main-color py-2 px-4 bg-white overflow-y-scroll'
                lockBackgroundScroll
                enableOverlay
            >

                <NavbarDrawer toggleDrawer={toggleDrawer} />

            </Drawer>
        </div>
    )
}

export default HeaderButtons

