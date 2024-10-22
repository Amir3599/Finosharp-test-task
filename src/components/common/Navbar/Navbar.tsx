import React from 'react'
import { NAVBAR_ITEMS } from './NavItems'
import { Popover } from 'flowbite-react'
import { ArrowIcon } from 'assets'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

const Navbar = () => {
    return (
        <nav className='lg:block hidden flex-1'>
            <ul className='flex gap-x-4 px-4 text-sm'>
                {NAVBAR_ITEMS.map((item) => (
                    <li>
                        {item.popoverContent ? (
                            <Popover
                                key={item.name}
                                trigger='hover'
                                content={item.popoverContent}
                            >
                                <a className='flex items-center gap-x-2' href={item.link}>
                                    <span>
                                        {item.name}
                                    </span>
                                    {item.popoverContent && <span><ArrowIcon /></span>}
                                </a>
                            </Popover>) : (
                            <a className='flex items-center gap-x-2' href={item.link}>
                                <span>
                                    {item.name}
                                </span>
                                {item.popoverContent && <span><ArrowIcon /></span>}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Navbar