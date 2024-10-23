import { DownloadIcon, GlobeIcon } from 'assets'
import { useMediaQuery } from 'common/hooks'
import { NAVBAR_ITEMS, NAVBAR_ITEMS_LITTLE } from 'components/common/Navbar/NavItems'
import { HiTemplate } from "react-icons/hi";
import { AiFillDollarCircle } from "react-icons/ai";
import React, { FC } from 'react'
import NavbarItem from './NavbarItem';
import { IoMdClose } from "react-icons/io";
import { MdDarkMode, MdSunny } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setUI } from 'store/slices/UIsection';

type props = {
    toggleDrawer: () => void
}

const NavbarDrawer: FC<props> = ({ toggleDrawer }) => {
    const isTablet = useMediaQuery("tablet")
    const isMobile = useMediaQuery("mobile")
    const isDesktop = useMediaQuery("desktop")

    const { theme } = useSelector((state: RootState) => state.ui)
    const dispatch = useDispatch()

    const toggleTheme = (mode: "light" | "dark") => {
        dispatch(setUI({ theme: mode }))
    }

    return (
        <div className='flex flex-col'>
            <button onClick={toggleDrawer} className='w-fit self-end my-4'>
                <IoMdClose className='scale-150' />
            </button>
            {isDesktop && NAVBAR_ITEMS_LITTLE.map((item) => <NavbarItem key={item.name} item={item} />)}
            {(isTablet || isMobile) && NAVBAR_ITEMS.map((item) => <NavbarItem key={item.name} item={item} />)}
            <div className='flex items-center justify-between gap-x-2 py-2'>
                <div className='flex items-center gap-x-4'>
                    <HiTemplate className='scale-150' />
                    <p>Theme</p>
                </div>
                <div className='flex border rounded-md border-slate-300 w-14 h-6 justify-evenly overflow-hidden'>
                    <button onClick={() => toggleTheme("light")} className={`flex-1 flex justify-center items-center ${theme === "light" && "dark:bg-slate-500/80 bg-app-bg"}`}><MdSunny /></button>
                    <button onClick={() => toggleTheme("dark")} className={`flex-1 flex justify-center items-center ${theme === "dark" && "dark:bg-slate-500/80 bg-app-bg"}`}><MdDarkMode /></button>
                </div>
            </div>
            <NavbarItem item={{ name: "Download", icon: <DownloadIcon svgProps={{ className: "dark:fill-app-white fill-black transition-colors duration-150" }} />, link: "#" }} />
            <NavbarItem item={{ name: "English", icon: <GlobeIcon svgProps={{ className: "dark:fill-app-white fill-black transition-colors duration-150" }} />, link: "#" }} />
            <NavbarItem item={{ name: "USD", icon: <AiFillDollarCircle />, link: "#" }} />
        </div>
    )
}

export default NavbarDrawer