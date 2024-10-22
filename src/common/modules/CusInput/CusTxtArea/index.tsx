"use client"
import React from 'react'
import { Textarea } from 'flowbite-react'

type props = {
    ibName: string
    regFunc: Function
    className?: string
}

const CusTextArea = ({ ibName, regFunc, className }: props) => {
    return (
        <div className={className}>
            <label htmlFor='first_name' className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{ibName}</label>
            <Textarea {...regFunc()} className='resize-none h-[42px]'/>
        </div>
    )
}

export default CusTextArea