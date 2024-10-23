import { ArrowIcon } from 'assets';
import React, { FC, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

type props = {
    item?: {
        name: string;
        link: string;
        icon?: any;
        popoverContent?: any;
        subItems?: string[];
    },
    sub?: boolean
}

const NavbarItem: FC<props> = ({ item, sub }) => {
    const [isOpenSubItems, setIsOpenSubItems] = useState(false)
    const toggle = () => setIsOpenSubItems((prev) => !prev)
    return (
        <AnimatePresence >
            <button onClick={toggle} key={item?.name} className={`flex items-center justify-between gap-x-2 hover:bg-slate-500/30 py-3 -mx-4 ${sub ? "pl-8" : "px-4"}`}>
                <div className='flex items-center gap-x-4'>
                    {item?.icon && <div className='scale-125'>{item.icon}</div>}
                    <p>{item?.name}</p>
                </div>
                {item?.subItems && item?.subItems?.length > 0 && <ArrowIcon svgProps={{ className: ` transition-transform duration-500 ${isOpenSubItems ? "-rotate-180" : ""}` }} />}
            </button>
            {isOpenSubItems && (
                <motion.div
                    key={"#animate" + item?.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeInOut", delay: 0.3 }}
                    className='flex flex-col text-sm dark:text-app-white/75 text-slate-500'
                >
                    {item?.subItems?.map((sbi) => <NavbarItem item={{ name: sbi, link: `#${sbi}` }} sub />)}
                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default NavbarItem